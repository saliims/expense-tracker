const express = require("express");
const helmet = require("helmet");
const xss = require("xss");

const app = express();

app.use(helmet());
app.use(express.json());

app.use(xss());
