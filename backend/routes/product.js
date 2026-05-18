// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const Product = require("../models/Product");

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // GET all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ msg: "Failed to fetch products" });
//   }
// });

// // ADD product with image upload
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const product = new Product({
//       name: req.body.name,
//       price: req.body.price,
//       category: req.body.category,
//       stock: req.body.stock,
//       description: req.body.description,
//       image: req.file
//         ? `http://localhost:5000/uploads/${req.file.filename}`
//         : "",
//     });

//     await product.save();
//     res.json(product);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "Product add failed" });
//   }
// });

// // DELETE product
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ msg: "Product deleted" });
//   } catch (err) {
//     res.status(500).json({ msg: "Delete failed" });
//   }
// });

// // GET single product
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ msg: "Product not found" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const Product = require("../models/Product");

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // GET all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.log("GET PRODUCTS ERROR:", err);
//     res.status(500).json({
//       msg: "Failed to fetch products",
//       error: err.message,
//     });
//   }
// });

// // ADD product with image
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const product = new Product({
//       name: req.body.name,
//       price: Number(req.body.price),
//       category: req.body.category,
//       stock: Number(req.body.stock),
//       description: req.body.description,
//       image: req.file
//         ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
//         : "",
//     });

//     await product.save();
//     res.json(product);
//   } catch (err) {
//     console.log("ADD PRODUCT ERROR:", err);
//     res.status(500).json({ msg: "Product add failed", error: err.message });
//   }
// });

// // GET single product
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ msg: "Product not found", error: err.message });
//   }
// });

// // DELETE product
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ msg: "Product deleted" });
//   } catch (err) {
//     res.status(500).json({ msg: "Delete failed", error: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const Product = require("../models/Product");


// STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });


// ADD PRODUCT
router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    try {
      const product = new Product({
        name: req.body.name,

        price: req.body.price,

        category: req.body.category,

        type: req.body.type,

        stock: req.body.stock,

        description: req.body.description,

        image: `http://localhost:5000/uploads/${req.file.filename}`,
      });

      await product.save();

      res.json(product);
    } catch (err) {
      console.log(err);

      res.status(500).json({
        msg: "Product add failed",
      });
    }
  }
);


// GET PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({
      msg: "Failed to fetch products",
    });
  }
});


// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    res.json(product);
  } catch (err) {
    res.status(500).json({
      msg: "Product fetch failed",
    });
  }
});

module.exports = router;