const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, match: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/ },
    password: { type: String, required: true },
    qoute: { type: String }
}
)

const User = mongoose.model('User', userSchema)
module.exports= User;