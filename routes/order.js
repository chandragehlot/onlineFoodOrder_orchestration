const express = require('express');
const orderController = require('../controller/orderController');

const router = express.Router();

router.get("/create", orderController.createOrder);
router.post("/update", orderController.UpdateOrder);
router.delete("/delete", orderController.softDeleteOrder);
router.get("/get-all", orderController.getAllOrders);
router.get("/user/get", orderController.getOrderByUser)


module.exports = router;