// src/components/dashboard/dashboardModel.js
const userModel = require("../users/userModel");
const productModel = require("../products/productModel");
const orderModel = require("../orders/orderModel");

const getDashboardStats = async () => {
  const [users, products, orders] = await Promise.all([
    userModel.findAll(),
    productModel.findAll(),
    orderModel.findAll(),
  ]);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  ).length;
  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  ).length;

  return {
    userCount: users.length,
    productCount: products.length,
    orderCount: orders.length,
    totalRevenue,
    completedOrders,
    pendingOrders,
  };
};

module.exports = {
  getDashboardStats,
};
