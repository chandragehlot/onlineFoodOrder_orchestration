const express = require('express');
const orderController = require('../controller/orderController');

const router = express.Router();

router.post("/create", orderController.createOrder);
router.put("/update", orderController.UpdateOrder);
router.get("/get-all", orderController.getAllOrders);
router.get("/user/get-all", orderController.getOrdersByUser);
//router.delete("/delete", orderController.softDeleteOrder);

module.exports = router;