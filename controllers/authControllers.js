const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
require("dotenv").config();

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    
    await user.save();

    res.status(201).json({ success: true, msg: "User Created Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res
      .status(200)
      .json({ success: true, msg: "User Login SuccessFully", token });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", err: error.message });
  }
};

const protectedRoute = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    success: true,
    data: user,
  });
};
module.exports = { register, Login, protectedRoute };
