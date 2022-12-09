require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const db = require("./db")
const router = require("./router")

db();
app.use(express.json())
app.use(cors())
app.use("/",router)

app.listen(PORT,() => {
    console.log(`listening on http://localhost:${PORT}`) 
})