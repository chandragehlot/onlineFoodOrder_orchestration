const express = require('express');
const cartController = require('../controller/cartController');

const router = express.Router();

// Create New Cart Per User
router.get("/create", cartController.createCart);

// Add Products in Cart
router.post("/item/add", cartController.addItemInCart);

// Get all cart items by cart id
router.get("/item/get-all", cartController.getCartAndCartItems);

// Update cart
router.post("/item/update", cartController.updateCart);

module.exports = router;