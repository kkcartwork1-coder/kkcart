// src/pages/Register.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/register", form);

      // ✅ Save user after register
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          email: form.email,
        })
      );

      alert("Registered Successfully 🎉");
      navigate("/login");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        <input
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full border rounded-lg p-3 mb-5"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Please wait..." : "Register"}
        </button>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;