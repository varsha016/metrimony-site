const mongoose = require("mongoose")
module.exports = mongoose.model("user", mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // profile: {
    //     type: String,
    //     required: true
    // },
    // contact: {
    //     type: String,
    //     required: true
    // },
    // pin: {
    //     type: String,
    //     required: true
    // },
    ////register value is up///

    avatar: {

        type: [String],
        required: true

    },
    dofb: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true

    },
    motherTongue: {
        type: String,
        required: true

    },
    marryStatus: {
        type: String,
        required: true

    },
    height: {
        type: String,
        required: true

    },

    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Ecountry: {
        type: String,
        required: true
    },
    employed: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    aboutSelf: {
        type: String,
        required: true
    },
    familyType: {
        type: String,
        required: true
    },
    fOccupation: {
        type: String,
        required: true
    },
    mOccupation: {
        type: String,
        required: true
    },
    brother: {
        type: String,
        required: true
    },
    sister: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    userRegisterId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "userRegister"
    },


    active: {
        type: Boolean,
        default: true
    },
    passwordResetAt: {
        type: Date
    },
    allowPasswordReset: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }))