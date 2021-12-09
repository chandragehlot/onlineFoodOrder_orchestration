const express = require('express');
const MenuController = require('../controller/menuController');

const router = express.Router();

router.get("/categories", MenuController.getMenuCategories);
router.get("/menuitem/bycategory/:category", MenuController.getMenuItemsByCategory);
router.get("/menuitems", MenuController.getAllMenuItems);

module.exports = router;