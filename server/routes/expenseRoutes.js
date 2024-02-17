const express = require("express");
const expenseController = require("../controllers/expenseController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.use(authMiddleware.verifyToken);

router.post("/", expenseController.createExpense);
router.get("/", expenseController.getAllExpenses);
router.get("/:id", expenseController.getExpenseById);
router.patch("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
