
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { sendEmail } = require("./../utils/email")
const UserRegisteration = require("../models/UserRegisteration")
const { AvatarUpload } = require("../utils/upload")

exports.registerUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            profile,
            contact,
            pin } = req.body
        if (!name
            || !email
            || !password
            || !profile
            || !contact
            || !pin
        ) {
            throw new Error("All Fileds Required ")
        }

        const found = await UserRegisteration.findOne({ email })
        console.log(req.body);
        console.log(email);
        // if (found) {
        //     throw new Error("Email Allready Exits")
        // }

        const hashPass = await bcrypt.hash(password, 10)
        console.log(hashPass);

        const result = await UserRegisteration.create({
            ...req.body,
            password: hashPass
        })
        console.log(result);
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        sendEmail({
            sendTo: email,
            sub: "welcome to matrimony app",
            msg: `We are excited to introduce ChatGPT to get users feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.`
        })
        res.json({
            success: true,
            message: "user register successfuly",
           
            result: {
                name: result.name,
                pin: result.pin,
                profile:result.profile,
                contact: result.contact,
                name: result.name,
                email: result.email,
                token
               
            }
            // result,
            // token

        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "error" + error,

        })

    }
}

exports.AllDataRegisterUser = async (req, res) => {
    try {
        AvatarUpload(req, res, async err => {
            console.log("++++++++++++++++++", req.body);
            const { id } = jwt.verify(req.headers.authorization, process.env.JWT_KEY)
            req.body.userRegisterId = id

            const {
                dofb,
                gender,
                religion,
                motherTongue,
                marryStatus,
                height,
                country,
                state,
                city,
                Ecountry,
                employed,
                income,
                aboutSelf,
                familyType,
                fOccupation,
                mOccupation,
                brother,
                sister,
                text,
                userRegisterId
            } = req.body
     
            

            if (err) {
                return res.status(400).json({
                    message: "Multer Error" + err
                })
            }
            console.log(req.files);
            const fileNames = []
            for (let i = 0; i < req.files.length; i++) {

                fileNames.push(`/assets/images/${req.files[i].filename}`)


            }
            const result = await User.create({
                ...req.body,
                avatar: fileNames,
                userRegisterId:id
            })
            const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
            console.log(token);
        //  if (result.gender==="female") {
            
        //  }
                
            
            res.json({
                message: "Avatar added successfully",
                result,
                token
            })
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "error" + error,

        })

    }
}

exports.getAllUsers = async (req, res) => {
    try {

        const result = await UserRegisteration.find()
        // let gender=req.gender=='Male'?"Female":"Male"
        // const result1 = await User.find({gender})
        const result1 = await User.find()
        // .select("name email _id")
        console.log(result1);
        res.json({
            success: true,
            message: "User fetch successfully",
            result:{
                ...result,result1
            }
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
// u
exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await UserRegisteration.deleteMany()
        const result1 = await User.deleteMany()
        res.json({
            success: true,
            message: "User delete successfully",

        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}