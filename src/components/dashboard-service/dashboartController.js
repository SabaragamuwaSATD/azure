// src/components/dashboard/dashboardRoutes.js
const express = require("express");
const router = express.Router();
const dashboardController = require("./dashboardController");

router.get("/stats", dashboardController.getStats);

module.exports = router;
