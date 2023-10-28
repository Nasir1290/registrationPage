const User = require("../models/userModel");



const newUser = async (req, res) => {
    const userInfo = req.body;
    const user = new User(userInfo)

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log('error occured while save new user :=> ', error)
    }
}

module.exports={newUser};