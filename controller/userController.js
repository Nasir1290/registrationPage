const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signUp = async (req, res) => {
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

exports.login = async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email})
    
    try {
        
        if(!user) {
             res.status(401).json({Error:'user not found'})
         }
         else{
             const matchedPassword = await bcrypt.compare(password,user.password);
             if(matchedPassword){
                 res.status(200).json({status:"success"});
             }
             else{
                 res.status(400).json({Error:"authenti cation failed"})
             }
         }
    } catch (error) {
        
        res.status(500).json({Error:"internal server error"})
    }
       
}