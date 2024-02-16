const mongoose = require("mongoose")
module.exports = mongoose.model("userRegister", mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },

    ////register value is up///



}, { timestamps: true }))