
const multer=require('multer');

const upload =multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"storagefolder")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+'.xlsx')
        }
    })
}).single("user_file");



module.exports = upload;