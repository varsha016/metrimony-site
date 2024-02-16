const { loginUser } = require("../controllers/authController")

const router = require("express").Router()
router
    .post("/login", loginUser)


// .post("/login", forgetPasswordCntroller)
// .post("/reset-password", resetPasswordController)
// .post("/login-with-google", loginWithGoogle)


module.exports = router