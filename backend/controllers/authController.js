

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const { sendEmail } = require("../utils/email")
const { addMinutes, isBefore } = require("date-fns")
const User = require("./../models/User")
const asyncHandler = require("express-async-handler")
const { OAuth2Client } = require("google-auth-library")
const UserRegisteration = require("../models/UserRegisteration")


exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    console.log("%%%%%%%%%%%%%%%%%%%%%%5");
    if (!email || !password) {
        return res.status(401).json({
            message: "All Fileds required"
        })
    }
    const result = await UserRegisteration.findOne({ email }).lean()
    if (!result) {
        return res.status(401).json({
            message: " Email is not Registerd with us"
        })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({
            message: "your Pasword Wrong"
        })
    }
    // const token= jwt.sign({id:result._id},process.env.JWT_KEY,{expiresIn:"15m"}) token expair hot
    const token = jwt.sign({ id: result._id }, process.env.JWT_KEY,)
    res.json({
        message: "Login Successfully",
        result: {
            name: result.name,
            pin: result.pin,
            profile:result.profile,
            contact: result.contact,
            name: result.name,
            email: result.email,
            token
           
        }
    })
   
})

// exports.forgetPasswordCntroller = async (req, res) => {
//     try {
//         const result = await user.findOne({ email: req.body.email })
//         console.log(result);
//         if (!result) {
//             return res.status(401).json({
//                 success: false,
//                 message: "This email is not registed with us"
//             })
//         }
//         await user.findByIdAndUpdate(result._id, {
//             passwordResetAt: addMinutes(new Date(), 3),
//             allowPasswordReset: true
//         })
//         // sendEmail({
//         //     sendTo: req.body.email,
//         //     sub: "forget password logic",
//         //     sms: `http://127.0.0.1:5173/reset-password/${result._id}`
//         // })
//         res.json({
//             success: true,
//             message: "Instruction send to Email"

//         })

//     } catch (error) {
//         res.status(401).json({
//             success: false,
//             message: "error" + error
//         })
//     }
// }
// exports.resetPasswordController = async (req, res) => {
//     try {
//         const { password } = req.body
//         const { userId } = req.query   //params means query
//         const record = await User.findById(userId)
//         if (!record) {
//             return res.status(401).json({
//                 success: false,
//                 message: "invalid Link"
//             });

//         }
//         if (isBefore(record.passwordResetAt, new Date())) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Link Expired"
//             })
//         }
//         if (!record.allowPasswordReset) {
//             return res.status(401).json({
//                 success: false,
//                 message: "you have use this link previously"
//             })

//         }

//         const hashpass = bcrypt.hashSync(password)  //bcrypt fun  password cha type change krto 123 la(jhhdhdskhdks) as kahi krto
//         const result =
//             await user.findByIdAndUpdate(userId,
//                 {
//                     password: hashpass,
//                     allowPasswordReset: false
//                 })
//         if (!result) {
//             res.status(401).json({
//                 success: false,
//                 message: "something wrong"
//             });

//         }
//         console.log(req.body);
//         console.log(req.query);
//         res.json({
//             success: true,
//             message: "password reset successfully",
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: "error" + error,
//         });
//     }
// };
// exports.loginWithGoogle = async (req, res) => {
//     try {
//         const { tokenId } = req.body
//         if (!tokenId) {

//             return res.status(401).json({
//                 success: false,
//                 message: "please provide token"
//             });
//         }
//         const client = new OAuth2Client("29807622822-udu19ru9n9rk2vl2btb0lbi3uki5rnnd.apps.googleusercontent.com")
//         const { payload: { name, email, picture } } = await client.verifyIdToken({
//             idToken: tokenId,
//             audience: "29807622822-udu19ru9n9rk2vl2btb0lbi3uki5rnnd.apps.googleusercontent.com"
//         })
//         const result = await user.findOne({ email })
//         if (result) {
//             const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
//             // old user
//             res.json({
//                 message: "Login success",
//                 result: {
//                     name,
//                     email,
//                     token
//                 }
//             })
//         } else {
//             // new user
//             const result = await user.create({
//                 name: name,
//                 email: email
//             })
//             const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
//             res.json({
//                 message: "user Register successefully",
//                 result: {
//                     name,
//                     email,
//                     token
//                 }

//             })
//         }

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: "error" + error,
//         });
//     }
// }