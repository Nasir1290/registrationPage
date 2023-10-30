const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const newUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({ name, email, password: hashPassword });
        const token = jwt.sign({ email: req.body.email }, 'shhhh');
        user.token = token;

        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error occurred while saving a new user:', error);
        res.status(400).json({ error: "Invalid user information" });
    }
}

module.exports = { newUser };
