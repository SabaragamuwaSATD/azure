// src/components/orders/orderController.js
const orderModel = require("./orderModel");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const orders = await orderModel.findByUserId(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;
    if (!userId || !products || !totalAmount) {
      return res
        .status(400)
        .json({ message: "UserId, products, and totalAmount are required" });
    }
    const newOrder = await orderModel.create({ userId, products, totalAmount });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  getUserOrders,
  createOrder,
};
