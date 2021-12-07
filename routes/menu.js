const express = require('express');
const MenuController = require('../controller/menuController');

const router = express.Router();

router.get("/menu_categories", MenuController.getMenuCategories);
router.get("/by_category/:category", MenuController.getMenuItemsByCategory);
router.get("/all_menuitems", MenuController.getAllMenuItems);

module.exports = router;