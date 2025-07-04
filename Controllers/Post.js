const Post = require("../Models/Post")

exports.AddPost =  async(req,res)=>{
        try {
        
        const found =  await Post.findOne({titre : req.body.titre})

        if (found) {
        return res.status(400).send('Titre already exists')
    }
        
        const newPost = new Post(req.body)

        await newPost.save()

        res.status(200).send({msg : 'Data added', newPost})
    }   catch (error) {
        res.status(500).send('Could not add data')
    }
    }


            exports.GetAllPosts = async(req,res)=>{
        try {
        const AllPosts = await Post.find().populate('owner')
        res.status(200).send({msg : "List AllPosts", AllPosts})


    }   catch (error) {
        res.status(500).send('Could not get Data')
    }
    }



             exports.GetOnePost = async(req,res)=>{
        try {
        const {id} = req.params

         const onePost =  await Post.findById(id)
         res.status(200).send({msg : "Data Details", onePost})
    }   catch (error) {
        res.status(500).send('Could not get Data')
    }
    }

           exports.DeletePost = async(req,res)=>{
         try {
        const {id} = req.params
       await Post.findByIdAndDelete(id)
       res.status(200).send('Data deleted')
    }  catch (error) {
        res.status(500).send('Could not delete data')
    }
}

exports.UpdatePost = async(req,res)=>{
try {
    const {id} = req.params
 await Post.findByIdAndUpdate(id,{$set : req.body})

res.status(200).send('Data updated')

} catch (error) {
    res.status(500).send('Could not update data')
}
}

   exports.GetMyPosts = async(req,res)=>{
        try {
        const myPosts = await Post.find({owner : req.user._id}).populate('owner')
        res.status(200).send({msg : "List myPosts", myPosts})

{}
    }   catch (error) {
        res.status(500).send('Could not get Data')
    }
    }