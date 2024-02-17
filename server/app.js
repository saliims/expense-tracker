const express = require("express");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/expense", expenseRoutes);

module.exports = app;
