// src/components/dashboard/dashboardController.js
const dashboardModel = require("./dashboardModel");

const getStats = async (req, res) => {
  try {
    const stats = await dashboardModel.getDashboardStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStats,
};
