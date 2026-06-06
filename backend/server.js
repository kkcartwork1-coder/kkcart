const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // ✅ add this
require("dotenv").config();


const authMiddleware = require("./middleware/auth");

// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const adminRoutes = require("./routes/admin");
const deliveryRoutes = require("./routes/delivery");

const app = express();



app.use(
  cors({
    origin: [
      "https://kkcart.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://kkcart-lhfg.vercel.app",
      "https://kkcart-lhfg.vercel.app/",
      "https://kkcart.store",
      "https://www.kkcart.store"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ make uploads folder public
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "You are logged in",
    user: req.user,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/delivery", deliveryRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

