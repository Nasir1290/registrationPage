const User = require("../models/userModel");
const jwt = require('jsonwebtoken');


const newUser = async (req, res) => {
    const userInfo = req.body;
    const user = new User(userInfo)
    const token = jwt.sign({ emal: req.body.email }, 'shhhh')
    user.token = token;

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log('error occured while save new user :=> ', error)
    }
}

module.exports = { newUser };