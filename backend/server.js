const express = require("express")
const cors = require("cors")
const { connect } = require("./config/db")
require("dotenv").config({ path: "./.env" })
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
connect()
app.use("/auth", require("./routes/authRoutes"))
app.use("/user", require("./routes/userRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`http://localhost:5000`))
