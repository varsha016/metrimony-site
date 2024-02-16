const { registerUser, getAllUsers,
     deleteAllUsers,
     AllDataRegisterUser } = require("../controllers/userCotroller")
     const { protected } =  require("../middlewares/authMiddleware")



const router = require("express").Router()
router
    .get("/",  getAllUsers)
    .post("/add", registerUser)
    .post("/add-all/info", protected,  AllDataRegisterUser)
    .delete("/delete", deleteAllUsers)
module.exports = router