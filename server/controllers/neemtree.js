const fs = require('fs')
const userDetails=require('../models/userSchema');
const excelToJson = require('convert-excel-to-json');
let async = require('async');

const neemtree = async (req,res) => {
    try {
	if(req.file?.filename === null || req.file.filename == 'undefined'){
	        res.status(400).json({ error: 'error'})
	    }else{
	        var filePath = "storagefolder/" + req.file.filename
	        const excelData = excelToJson({
	            sourceFile: filePath,
	            header: {
	                rows: 1
	            },
	            columnToKey: {
	                "*": "{{columnHeader}}"
	            }
	        })
            const data = excelData.Sheet1
            const filteredData = data.filter((data,index,self) => index === self.findIndex((t) => t.Email === data.Email))
            console.log(data.length,filteredData.length) 
            async.eachSeries(filteredData, async function(data,outCb){
                const User = new userDetails({
                    name: data['Name of the Candidate'],
                    email: data['Email'],
                    mobile: data['Mobile No.'],
                    dob: data['Date of Birth'],
                    workExp: data['Work Experience'],
                    resumeTitle: data['Resume Title'],
                    currentLocation: data['Current Location'],
                    postalAddress: data['Postal Address'],
                    currentEmployer: data['Current Employer'],
                    currentDesignation: data['Current Designation']
                })
                await User.save()
                // outCb()
            })
	        res.status(200).json(excelData)
	    }
} catch (error) {
    console.log(error)
	res.status(500).json({ err: error})
}
}

module.exports = neemtree