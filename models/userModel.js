const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true, validate: {
            validator: function (v) {
                return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(v);
            },
            message: props => `${props.value} is not a valid name!!!!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!!!!!!`
        }
    },
    password: { type: String, required: true },
    qoute: { type: String }
}
)

const User = mongoose.model('User', userSchema)
module.exports = User;