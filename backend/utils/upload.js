const multer = require("multer")
const path = require("path")
const fs = require("fs")
const { v4: uuid } = require("uuid")
const AvatarStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const loc = "public/assets/images"
        if (!fs.existsSync(loc)) {
            fs.mkdirSync(loc, { recursive: true })
        }
        cb(null, loc)
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedExtensions = [".png", ".jpg", "jpeg"]
        if (!allowedExtensions.includes(ext)) {
            cb("invalid file extension")
        }
        const fn = uuid() + ext
        cb(null, fn)
    }
})

exports.AvatarUpload = multer({
    storage: AvatarStorage,
    limits: { fileSize: "1mb" }
}).array("avatar", 5)