const express = require("express");
const MenuController = require("../controller/productController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/allcategories", MenuController.getMenuCategories);
router.get("/bycategory/:category", MenuController.getMenuItemsByCategory);
router.get("/getall", MenuController.getAllMenuItems);
router.post("/add", upload.single("itemImage"), MenuController.addMenuItem);
router.post(
  "/update",
  upload.single("itemImage"),
  MenuController.updateMenuItem
);
router.get("/delete", MenuController.deleteMenuItem);

module.exports = router;
