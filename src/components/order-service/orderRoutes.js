// src/components/orders/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("./orderController");

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.get("/user/:userId", orderController.getUserOrders);
router.post("/", orderController.createOrder);

module.exports = router;
