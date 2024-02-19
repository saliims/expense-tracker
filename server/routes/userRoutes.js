const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.use(authMiddleware.verifyToken);

router.get("/me", userController.getMe);

module.exports = router;
