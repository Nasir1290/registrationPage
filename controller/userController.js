const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const dotenv = require('dotenv');
dotenv.config()

exports.signUp = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(password, saltRounds);
        // Create a new user with hashed password
        const user = new User({ name, email, password: hashPassword });
        // Generate a token for the user
        // Assign the token to the user
        // Save the user to the database
        const savedUser = await user.save();
        // Send the saved user as a response
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle error if any occurred
        console.error('Error occurred while saving a new user:', error);
        res.status(400).json({ error: "Invalid user information" });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            // If user not found, return error response
            res.json({ status: 'email error' });
            res.status(401)
        } else {
            // Compare the input password with the stored hashed password
            const matchedPassword = await bcrypt.compare(password, user.password);

            if (matchedPassword) {
                // If passwords match, return success response
                const token = jwt.sign({ email:user.email }, process.env.SECRET_KEY);
                res.status(200).json({ status: "success" });
            } else {
                // If passwords do not match, return error response
                res.json({ status: "password error" });
                res.status(400)
            }
        }
    } catch (error) {
        // Handle error if any occurred
        res.status(500).json({ Error: "internal server error" });
        
    }
}