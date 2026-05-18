// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const oldUser = await User.findOne({ email });
//     if (oldUser) return res.status(400).json({ msg: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email,
//       password: hashed,
//       provider: "local",
//     });

//     await user.save();

//     res.json(user);
//   } catch (err) {
//     console.log("Register Error:", err);
//     res.status(500).json({ msg: "Register failed" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ msg: "User not found" });

//     if (user.provider === "google") {
//       return res.status(400).json({ msg: "Please login with Google" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret123", {
//       expiresIn: "7d",
//     });

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         photo: user.photo,
//         isAdmin: user.isAdmin,
//       },
//     });
//   } catch (err) {
//     console.log("Login Error:", err);
//     res.status(500).json({ msg: "Login failed" });
//   }
// });

// router.post("/google-login", async (req, res) => {
//   try {
//     const { name, email, photo, googleId } = req.body;

//     if (!email) {
//       return res.status(400).json({ msg: "Google email missing" });
//     }

//     let user = await User.findOne({ email });

//     if (!user) {
//       user = new User({
//         name: name || "Google User",
//         email,
//         photo,
//         googleId,
//         provider: "google",
//         password: "",
//       });

//       await user.save();
//     } else {
//       user.name = user.name || name;
//       user.photo = user.photo || photo;
//       user.googleId = user.googleId || googleId;
//       user.provider = user.provider || "google";
//       await user.save();
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret123", {
//       expiresIn: "7d",
//     });

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         photo: user.photo,
//         isAdmin: user.isAdmin,
//       },
//     });
//   } catch (err) {
//     console.log("Google Login Backend Error:", err);
//     res.status(500).json({
//       msg: "Google login failed",
//       error: err.message,
//     });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "7d" }
  );
};

const userResponse = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  photo: user.photo || "",
  isAdmin: user.isAdmin || false,
  provider: user.provider,
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      provider: "local",
    });

    res.json({
      msg: "Registered successfully",
      user: userResponse(user),
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({
      msg: "Register failed",
      error: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (user.provider === "google") {
      return res.status(400).json({ msg: "Please login with Google" });
    }

    const isMatch = await bcrypt.compare(password, user.password || "");

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = createToken(user);

    res.json({
      token,
      user: userResponse(user),
    });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({
      msg: "Login failed",
      error: err.message,
    });
  }
});

// router.post("/google-login", async (req, res) => {
//   try {
//     const { name, email, photo, googleId } = req.body;

//     if (!email) {
//       return res.status(400).json({ msg: "Google email missing" });
//     }

//     let user = await User.findOne({ email });

//     if (!user) {
//       user = await User.create({
//         name: name || "Google User",
//         email,
//         photo: photo || "",
//         googleId: googleId || "",
//         provider: "google",
//         password: googleId || email,
//       });
//     } else {
//       user.name = user.name || name || "Google User";
//       user.photo = user.photo || photo || "";
//       user.googleId = user.googleId || googleId || "";
//       user.provider = user.provider || "google";
//       await user.save();
//     }

//     const token = createToken(user);

//     res.json({
//       token,
//       user: userResponse(user),
//     });
//   } catch (err) {
//     console.log("GOOGLE LOGIN ERROR:", err);
//     res.status(500).json({
//       msg: "Google login failed",
//       error: err.message,
//     });
//   }
// });
router.post("/google-login", async (req, res) => {
  try {
    const { name, email, photo, googleId } = req.body;

    if (!email) {
      return res.status(400).json({ msg: "Google email missing" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(googleId || email, 10);

      user = await User.create({
        name: name || "Google User",
        email,
        photo: photo || "",
        googleId: googleId || "",
        provider: "google",
        password: hashedPassword,
      });
    } else {
      user.name = user.name || name || "Google User";
      user.photo = user.photo || photo || "";
      user.googleId = user.googleId || googleId || "";
      user.provider = user.provider || "google";

      if (!user.password) {
        user.password = await bcrypt.hash(googleId || email, 10);
      }

      await user.save();
    }

    const token = createToken(user);

    res.json({
      token,
      user: userResponse(user),
    });
  } catch (err) {
    console.log("GOOGLE LOGIN ERROR:", err);
    res.status(500).json({
      msg: "Google login failed",
      error: err.message,
    });
  }
});

module.exports = router;