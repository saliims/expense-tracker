const Expense = require("../models/expenseModel");

exports.createExpense = async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;
    const newExpense = new Expense({
      description,
      amount,
      category,
      date,
      user: req.user.id,
    });

    await newExpense.save();

    res
      .status(201)
      .json({ message: "Expense created successfully", expense: newExpense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ expenses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { content } = req.body;
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense updated successfully", expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
