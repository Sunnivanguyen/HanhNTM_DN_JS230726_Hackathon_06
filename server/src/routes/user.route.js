const express = require("express");

const UserController = require("../controllers/user.controller");

const router = express.Router();

const { getAllUsers, signup, login } = UserController;

router.get("/", getAllUsers);
router.post("/signup", signup);
router.get("/login", login);

module.exports = router;
