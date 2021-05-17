const mongoose = require('mongoose')
const SignUpSchema = new mongoose.Schema({
    fullName: String,
    username: { type: String, unique: true },
    password: String,
    city: String,
    pincode: Number,
    phone: Number
})
const SignUpModel = mongoose.model("signup", SignUpSchema)
module.exports = SignUpModel;