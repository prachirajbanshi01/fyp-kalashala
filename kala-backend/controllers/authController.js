const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Logic for Registering a User
exports.register = async (req, res) => {
    console.log("Registration Hit!");
  try {
    const { name, email, password, role } = req.body;

    // 1. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // 2. Create the user
    const user = await User.create({ name, email, password, role });

    // 3. Generate a JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ success: true, token, user: { id: user._id, name, email, role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};