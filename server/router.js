const express = require('express')
// const async=require('async');
// const userDetails=require('../models/userSchema');
const router = express.Router()

 
router.get("/test",(req,res) => {
    res.json({})
})


const neemtree = require('./controllers/neemtree');
const upload = require('./controllers/upload');
// var upload = multer({ dest: "uploads/"})

router.post("/neemtree",upload,neemtree)


module.exports = router