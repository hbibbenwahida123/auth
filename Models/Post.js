const mongoose = require ('mongoose')

const PostSchema = new mongoose.Schema(
    {
        titre : String, 
        image : String, 
        description : String,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }

    }
)

module.exports = mongoose.model('Post',PostSchema)