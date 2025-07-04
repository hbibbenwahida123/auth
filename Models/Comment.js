const mongoose = require ('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        comment : String, 
        post : {
            type : mongoose.Types.ObjectId,
            ref : 'Post'
        },
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }

    }
)

module.exports = mongoose.model('Comment',CommentSchema)