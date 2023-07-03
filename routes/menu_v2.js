const express = require('express');
const MenuController = require('../controller/menuController');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/categories", MenuController.getMenuCategories);
router.get("/menuitem/bycategory/:category", MenuController.getMenuItemsByCategory);
router.get("/menuitems", MenuController.getAllMenuItems);
router.post("/addmenuitem", upload.single("itemImage"), MenuController.addMenuItem);
router.get('/deleteMenuItem',MenuController.deleteMenuItem);
router.post('/updatemenuitem',upload.single("itemImage") , MenuController.updateMenuItem )
//router.get('/test', MenuController.test_v2);

module.exports = router;
