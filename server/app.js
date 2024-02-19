const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
