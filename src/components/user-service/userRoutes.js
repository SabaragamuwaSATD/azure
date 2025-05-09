// src/components/users/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

module.exports = router;
