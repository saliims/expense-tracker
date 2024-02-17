const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      if (existingUser.email === email) {
        res
          .status(400)
          .json({ message: "User with this email already exists" });
      } else {
        res
          .status(400)
          .json({ message: "User with this username already exists" });
      }
    }

    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created successfully", savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    let user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
