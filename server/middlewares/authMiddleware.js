const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization") || req.header("authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verified.userId);

    if (!user) {
      return res.status(403).send("Access Denied");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
