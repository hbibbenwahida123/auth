const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema (
    {
        name : String, 
        email : {type : String, required : true, unique : true},
        password : {type : String, required : true},
        image : {
            type : String,
            default : "/UserImage.png"
        },
        role : {
            type : String,
            default : 'user'
        }
    }
)

module.exports = mongoose.model('User', userSchema)