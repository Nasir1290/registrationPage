const User = require("../models/userModel");



const newUser = async (req,res) => {
    const userInfo = req.body;
    const user = new User(userInfo)
    user.save()
}