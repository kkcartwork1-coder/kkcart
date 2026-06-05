import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import API from "../api";

function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");

    if (token) {
      if (isAdmin === "true") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  const saveUserData = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.user.id);
    localStorage.setItem("userName", data.user.name || "");
    localStorage.setItem("userEmail", data.user.email || "");
    localStorage.setItem("userPhoto", data.user.photo || "");
    localStorage.setItem("isAdmin", data.user.isAdmin ? "true" : "false");
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const redirectUser = (user) => {
    if (user.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      saveUserData(res.data);

      toast.success("Login Successful 🎉");
      redirectUser(res.data.user);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/register", form);

      toast.success("Register Successful 🎉 Please Login");
      setIsRegister(false);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Register Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      const res = await API.post("/auth/google-login", {
        name: googleUser.displayName,
        email: googleUser.email,
        photo: googleUser.photoURL,
        googleId: googleUser.uid,
      });

      saveUserData(res.data);

      toast.success("Google Login Successful 🎉");
      redirectUser(res.data.user);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Google Login Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!form.email) {
      toast.error("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, form.email);
      toast.success("Password reset link sent to your email");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-orange-500 mb-2">
          KKCart
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {isRegister ? "Create your account" : "Login to continue shopping"}
        </p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border py-3 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 mb-5 disabled:opacity-60"
        >
          <span className="text-xl">G</span>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-5">
          <hr className="flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {isRegister && (
          <input
            type="text"
            placeholder="Enter Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
          />
        )}

        <input
          type="email"
          placeholder="Enter Gmail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border rounded-xl p-3 mb-2 outline-none focus:ring-2 focus:ring-orange-400"
        />

        {!isRegister && (
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-orange-500 font-bold mb-4 block ml-auto"
          >
            Forgot Password?
          </button>
        )}

        <button
          onClick={isRegister ? handleRegister : handleLogin}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
        </button>

        <p className="text-center text-sm mt-5">
          {isRegister ? "Already have account?" : "New user?"}{" "}
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-orange-500 font-bold"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;