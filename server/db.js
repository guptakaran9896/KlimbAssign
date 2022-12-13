const mongoose=require('mongoose')
const URL="mongodb+srv://guptakaran123:karan321@cluster0.fakwxsk.mongodb.net/?retryWrites=true&w=majority"

const dbConnect = ()=> {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection
    db.on('error',console.error.bind(console,'connection error'))
    db.once('open',()=> {
        console.log('DB connected...')
    })
}


module.exports = dbConnect;