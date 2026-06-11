// const express = require("express");
// const router = express.Router();

// const multer = require("multer");
// const path = require("path");

// const Product = require("../models/Product");


// // STORAGE
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },

//   filename: function (req, file, cb) {
//     cb(
//       null,
//       Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage });


// // ADD PRODUCT
// router.post(
//   "/",
//   upload.single("image"),
//   async (req, res) => {
//     try {
//       const product = new Product({
//         name: req.body.name,

//         price: req.body.price,

//         category: req.body.category,

//         type: req.body.type,

//         stock: req.body.stock,

//         description: req.body.description,

//         image: req.file
//           ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
//           : "",
//       });
//       await product.save();

//       res.json(product);
//     } catch (err) {
//       console.log(err);

//       res.status(500).json({
//         msg: "Product add failed",
//       });
//     }
//   }
// );


// // GET PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({
//       createdAt: -1,
//     });

//     res.json(products);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Failed to fetch products",
//     });
//   }
// });


// // GET SINGLE PRODUCT
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(
//       req.params.id
//     );

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Product fetch failed",
//     });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();

// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const Product = require("../models/Product");

// // Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../uploads");

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // STORAGE
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // ADD PRODUCT
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const product = new Product({
//       name: req.body.name,
//       price: Number(req.body.price),
//       category: req.body.category,
//       type: req.body.type,
//       stock: Number(req.body.stock),
//       description: req.body.description,

//       // image: req.file
//       //   ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
//       //   : "",
//       image: req.file
//   ? `https://kkcart-backend.onrender.com/uploads/${req.file.filename}`
//   : "",
//     });

//     await product.save();

//     res.json(product);
//   } catch (err) {
//     console.log("ADD PRODUCT ERROR:", err);

//     res.status(500).json({
//       msg: "Product add failed",
//       error: err.message,
//     });
//   }
// });

// // GET PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({
//       createdAt: -1,
//     });

//     res.json(products);
//   } catch (err) {
//     console.log("GET PRODUCTS ERROR:", err);

//     res.status(500).json({
//       msg: "Failed to fetch products",
//       error: err.message,
//     });
//   }
// });

// // GET SINGLE PRODUCT
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         msg: "Product not found",
//       });
//     }

//     res.json(product);
//   } catch (err) {
//     console.log("GET SINGLE PRODUCT ERROR:", err);

//     res.status(500).json({
//       msg: "Product fetch failed",
//       error: err.message,
//     });
//   }
// });

// // UPDATE PRODUCT
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const updateData = {
//       name: req.body.name,
//       price: Number(req.body.price),
//       category: req.body.category,
//       type: req.body.type,
//       stock: Number(req.body.stock),
//       description: req.body.description,
//     };

//     // if (req.file) {
//     //   updateData.image =
//     //     `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//     // }

//     if (req.file) {
//   updateData.image =
//     `https://kkcart-backend.onrender.com/uploads/${req.file.filename}`;
// }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.json(updatedProduct);
//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       msg: "Product update failed",
//       error: err.message,
//     });
//   }
// });


// // DELETE PRODUCT
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);

//     res.json({
//       msg: "Product deleted",
//     });
//   } catch (err) {
//     res.status(500).json({
//       msg: "Delete failed",
//     });
//   }
// });
// module.exports = router;

// const express = require("express");
// const router = express.Router();

// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary-v2");
// const cloudinary = require("../config/cloudinary");

// const Product = require("../models/Product");

// // Cloudinary Storage
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "kkcart-products",
//     allowed_formats: ["jpg", "jpeg", "png", "webp"],
//   },
// });

// const upload = multer({ storage });

// // ADD PRODUCT
// // router.post("/", upload.single("image"), async (req, res) => {
// //   try {
// //     const product = new Product({
// //       name: req.body.name,
// //       price: Number(req.body.price),
// //       category: req.body.category,
// //       type: req.body.type,
// //       stock: Number(req.body.stock),
// //       description: req.body.description,

// //       image: req.file ? req.file.path : "",
// //     });

// //     await product.save();

// //     res.json(product);
// //   } catch (err) {
// //     console.log("ADD PRODUCT ERROR:", err);

// //     res.status(500).json({
// //       msg: "Product add failed",
// //       error: err.message,
// //     });
// //   }
// // });

// // router.post("/", upload.single("image"), async (req, res) => {
// //   try {

// //     console.log("BODY:", req.body);
// //     console.log("FILE:", req.file);

// //     const product = new Product({
// //       name: req.body.name,
// //       price: Number(req.body.price),
// //       category: req.body.category,
// //       type: req.body.type,
// //       stock: Number(req.body.stock),
// //       description: req.body.description,

// //       image: req.file ? req.file.path : "",
// //     });

// //     await product.save();

// //     res.json(product);

// //   } catch (err) {
// //     console.log("ADD PRODUCT ERROR:", err);

// //     res.status(500).json({
// //       msg: "Product add failed",
// //       error: err.message,
// //     });
// //   }
// // });


// // router.post("/", upload.single("image"), async (req, res) => {
// //   try {
// //     console.log("BODY:", req.body);
// //     console.log("FILE DATA:", req.file);

// //     const product = new Product({
// //       name: req.body.name,
// //       price: req.body.price,
// //       category: req.body.category,
// //       type: req.body.type,
// //       // stock: Number(req.body.stock),
// //       // description: req.body.description,

// //       image:
// //         req.file?.path ||
// //         req.file?.secure_url ||
// //         req.file?.url ||
// //         "",
// //     });

// //     await product.save();

// //     res.json(product);
// //   } catch (err) {
// //     console.log("ADD PRODUCT ERROR:", err);

// //     res.status(500).json({
// //       msg: "Product add failed",
// //       error: err.message,
// //     });
// //   }
// // });
// // router.post("/", upload.single("image"), async (req, res) => {
// //   try {
// //     // FIXED: Fallback to a default image string if req.file is missing, instead of crashing the server
// //     const imageUrl = req.file ? req.file.path : "/products/default.jpg"; 

// //     const newProduct = new Product({
// //       name: req.body.name,
// //       price: req.body.price, 
// //       type: req.body.type,
// //       category: req.body.category,
// //       image: imageUrl // Safe value assignment
// //     });

// //     await newProduct.save();
// //     res.status(201).json(newProduct);
// //   } catch (err) {
// //     console.error("Server creation trace error:", err);
// //     res.status(500).json({ msg: "Database insert operational failure", error: err.message });
// //   }
// // });
// // ⚡ SAFE PRODUCT CREATION ROUTE
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     // 1. SAFE FALLBACK CHECK: If Multer fails to save or intercept the file,
//     // fallback to a default location path string instead of throwing an unhandled 500 crash!
//     const imageUrl = req.file ? req.file.path : "/products/default.jpg";

//     const newProduct = new Product({
//       name: req.body.name,
//       price: req.body.price, // Preserves "100 (1 kg)" raw string format
//       type: req.body.type,
//       category: req.body.category,
//       image: imageUrl // Safe variable injection
//     });

//     // 2. Persist to MongoDB
//     await newProduct.save();
    
//     // 3. Return created object back to frontend
//     res.status(201).json(newProduct);
//   } catch (err) {
//     // This will print the exact internal system error directly to your backend console terminal window
//     console.error("❌ CRITICAL INVENTORY HUB BACKEND CRASH LOG:", err);
    
//     res.status(500).json({ 
//       msg: "Internal schema processing node breakdown", 
//       error: err.message 
//     });
//   }
// });
// // GET PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({
//       createdAt: -1,
//     });

//     res.json(products);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Failed to fetch products",
//       error: err.message,
//     });
//   }
// });

// // GET SINGLE PRODUCT
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         msg: "Product not found",
//       });
//     }

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Product fetch failed",
//       error: err.message,
//     });
//   }
// });

// // UPDATE PRODUCT
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const updateData = {
//       name: req.body.name,
//       price: req.body.price,
//       category: req.body.category,
//       type: req.body.type,
//       // stock: Number(req.body.stock),
//       // description: req.body.description,
//     };

//     if (req.file) {
//       updateData.image = req.file.path;
//     }

//     const updatedProduct =
//       await Product.findByIdAndUpdate(
//         req.params.id,
//         updateData,
//         { new: true }
//       );

//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Product update failed",
//       error: err.message,
//     });
//   }
// });

// // DELETE PRODUCT
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(
//       req.params.id
//     );

//     res.json({
//       msg: "Product deleted",
//     });
//   } catch (err) {
//     res.status(500).json({
//       msg: "Delete failed",
//       error: err.message,
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary-v2");
const cloudinary = require("../config/cloudinary");

const Product = require("../models/Product");

// Cloudinary Storage Engine Configuration Setup
let storage;
let upload;

try {
  storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "kkcart-products",
      allowed_formats: ["jpg", "jpeg", "png", "webp", "avif", "gif"],
      resource_type: "auto",
    },
  });
  
  upload = multer({ 
    storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  });
  
  console.log("✅ Cloudinary storage initialized successfully");
} catch (err) {
  console.error("❌ Cloudinary storage initialization failed:", err);
  // Fallback to memory storage
  upload = multer({ storage: multer.memoryStorage() });
}

// =========================================================================
// 1. ADD NEW PRODUCT (FIXED & UNCOMMENTED)
// =========================================================================
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     console.log("📥 INCOMING BODY:", req.body);
//     console.log("🖼️ INCOMING CLOUDINARY FILE DATA:", req.file);

//     // Dynamic Cloudinary string selection fallback framework assignment
//     const finalImageUrl = req.file?.path || req.file?.secure_url || req.file?.url || "https://res.cloudinary.com/placeholder-image.jpg";

//     const newProduct = new Product({
//       name: req.body.name,
//       price: req.body.price, // Safely handles "100 (1 kg)" string data parameter pipelines
//       category: req.body.category,
//       type: req.body.type,
//       image: finalImageUrl // Injecting fallback to satisfy Mongoose validation constraint layers
//     });

//     // Save configuration parameters context nodes directly into MongoDB
//     await newProduct.save();
//     res.status(201).json(newProduct);

//   } catch (err) {
//     console.error("❌ CRITICAL ADD PRODUCT FAILURE LOG:", err);
//     res.status(500).json({
//       msg: "Product add failed",
//       error: err.message,
//     });
//   }
// });
// ⚡ DIAGNOSTIC PRODUCT CREATION ROUTE
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     // Catch if the image payload didn't hit Multer cleanly
//     if (!req.file) {
//       console.log("⚠️ WARNING: No file object received in req.file");
//     } else {
//       console.log("🚀 CLOUDINARY UPLOAD SUCCESS!");
//       console.log("FILE OBJECT:", JSON.stringify(req.file, null, 2));
//     }

//     // Safety fallback variables to prevent field validation crashes
//     // For Cloudinary storage, use secure_url or url property
//     let imageUrl = "https://res.cloudinary.com/demo/image/upload/sample.jpg";
//     if (req.file) {
//       imageUrl = req.file.secure_url || req.file.url || req.file.path || imageUrl;
//     }

//     const newProduct = new Product({
//       name: req.body.name || "Unnamed Product",
//       price: req.body.price || "0", 
//       type: req.body.type || "Grocery",
//       category: req.body.category || "General",
//       image: imageUrl
//     });

//     const savedProduct = await newProduct.save();
//     console.log("💾 MONGOOSE SAVE SUCCESS:", savedProduct);
    
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     // Check your server terminal window! The exact line causing your crash will print here.
//     console.error("❌ CRITICAL INVENTORY HUB BACKEND CRASH LOG:", err);
    
//     res.status(500).json({ 
//       msg: "Internal server processing failure", 
//       error: err.message 
//     });
//   }
// });

router.post("/", async (req, res) => {
  // Handle multer error manually
  const handler = upload.single("image");
  handler(req, res, async (err) => {
    if (err) {
      console.error("❌ MULTER/UPLOAD ERROR:", err);
      return res.status(500).json({
        msg: "File upload failed",
        error: err.message,
      });
    }

    try {
      console.log("📝 REQUEST BODY:", req.body);
      console.log("📁 FILE RECEIVED:", req.file ? "YES" : "NO");
      
      if (req.file) {
        console.log("🖼️ FILE KEYS:", Object.keys(req.file));
      }

      // Get image URL from Cloudinary or use fallback
      let imageUrl = "https://res.cloudinary.com/demo/image/upload/c_scale,w_300/sample.jpg";
      if (req.file) {
        // Cloudinary usually provides these properties
        imageUrl = req.file.secure_url || req.file.url || req.file.path || imageUrl;
        console.log("✅ Image URL:", imageUrl);
      } else {
        console.log("⚠️ No image, using fallback");
      }

      const newProduct = new Product({
        name: req.body.name || "Unnamed",
        price: req.body.price || "0", 
        type: req.body.type || "Grocery",
        category: req.body.category || "General",
        image: imageUrl
      });

      const savedProduct = await newProduct.save();
      console.log("✅ SAVED:", savedProduct._id);
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error("❌ ERROR:", err);
      res.status(500).json({
        msg: "Product creation failed",
        error: err.message,
      });
    }
  });
});
// =========================================================================
// 2. GET ALL PRODUCTS
// =========================================================================
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({
      msg: "Failed to fetch products",
      error: err.message,
    });
  }
});

// // =========================================================================
// // 3. GET SINGLE PRODUCT LISTING
// // =========================================================================
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ msg: "Product not found" });
//     }
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Product fetch failed",
//       error: err.message,
//     });
//   }
// });
// =========================================================================
// 3. GET SINGLE PRODUCT LISTING (FIXED WITH CAST-ERROR HANDLER)
// =========================================================================
const mongoose = require("mongoose"); // Ensure mongoose is imported at the top of the file

router.get("/:id", async (req, res) => {
  try {
    // ⚡ FIX: Check if the request param shape is a valid 24-char hex string
    // This stops malformed ID patterns from crashing the Mongoose parser engine
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.warn(`⚠️ Bad request received with a malformed ID shape: ${req.params.id}`);
      return res.status(400).json({ 
        msg: "Invalid Product ID format. Must be a 24-character hexadecimal string." 
      });
    }

    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    
    res.json(product);
  } catch (err) {
    console.error("❌ BACKEND SINGLE PRODUCT FETCH ERROR:", err);
    res.status(500).json({
      msg: "Internal server error during data retrieval",
      error: err.message,
    });
  }
});

// // =========================================================================
// // 4. UPDATE EXISTING PRODUCT LISTING
// // =========================================================================
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const updateData = {
//       name: req.body.name,
//       price: req.body.price,
//       category: req.body.category,
//       type: req.body.type,
//     };

//     if (req.file) {
//       updateData.image = req.file.path || req.file.secure_url || req.file.url;
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({
//       msg: "Product update failed",
//       error: err.message,
//     });
//   }
// });
// =========================================================================
// 4. UPDATE EXISTING PRODUCT LISTING (CRASH-PROOFED)
// =========================================================================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    // 1. Guard against malformed IDs before processing database queries
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: "Invalid Product ID format" });
    }

    // 2. Build the update payload dynamically, providing structural fallback values
    // This stops Mongoose from crashing if a field arrives blank or undefined from the UI
    const updateData = {
      name: req.body.name || "Unnamed Product",
      price: req.body.price || "0",
      category: req.body.category || "General",
      type: req.body.type || "Grocery",
    };

    // 3. If a new image was uploaded to Cloudinary, map its secure path string
    if (req.file) {
      updateData.image = req.file.secure_url || req.file.url || req.file.path;
    }

    // 4. Execute update operation with validation options enabled
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product record not found" });
    }

    console.log("🔄 INVENTORY UPDATE SUCCESS:", updatedProduct._id);
    res.json(updatedProduct);

  } catch (err) {
    console.error("❌ CRITICAL PRODUCT UPDATE BACKEND CRASH LOG:", err);
    res.status(500).json({
      msg: "Product update pipeline processing failed",
      error: err.message,
    });
  }
});

// =========================================================================
// 5. DELETE PRODUCT LISTING
// =========================================================================
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({
      msg: "Delete failed",
      error: err.message,
    });
  }
});

module.exports = router;