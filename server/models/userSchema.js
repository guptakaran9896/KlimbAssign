const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    mobile: {
        type: Number,
        // required: true
    },
    dob: {
        type: String,
        // required: true
    },
    workExp: {
        type: String,
        // required: true
    }, 
    resumeTitle: {
        type: String,
        // required: true
    },
    currentLocation: {
        type: String,
        // required: true
    },
    postalAddress: {
        type: String,
        // required: true
    },
    currentEmployer: {
        type: String,
        // required: true
    },
    currentDesignation: {
        type: String,
        // required: true
    },
},
{ timestamps: true }
)

const userDetails = mongoose.model('user',userSchema)

module.exports = userDetails