const express = require('express');
const MenuController = require('../controller/menuController');

const router = express.Router();

router.get("/categories", MenuController.getMenuCategories_v2);
router.get("/menuitem/bycategory/:category", MenuController.getMenuItemsByCategory_v2);
router.get("/menuitems", MenuController.getAllMenuItems_v2);
//router.get('/test', MenuController.test_v2);

module.exports = router;
