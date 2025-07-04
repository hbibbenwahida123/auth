const express = require('express');
const Comment = require("../Models/Comment");
const { isAuth } = require('../Middlewares/isAuth');
const CommentRouter = express.Router();


CommentRouter.post('/AddComment', isAuth,async (req, res) => {
  try {
    const newComment = new Comment({...req.body, owner : req.user._id});
    await newComment.save();
    res.status(200).send({ msg: 'Comment added', newComment });
  } catch (error) {
    res.status(500).send('Could not add Comment');
  }
});


// CommentRouter.get('/GetAllComment',async(raq,res)=>{
//     try {
//            const AllComment = await Comment.find().populate('owner')
//                res.status(200).send({msg : "List AllComment", AllComment})
       
//     } catch (error) {
//         res.status(500).send('Could not add Comment');
//     }
// })

CommentRouter.get('/GetAllCommentsByPost/:id',async(req,res)=>{
    try {
            const {id} = req.params
            
           const Comments = await Comment.find({post : id}).populate('owner').populate('post')
               res.status(200).send({msg : "List Comments", Comments})
       
    } catch (error) {
        res.status(500).send('Could not add Comment');
    }
})


// CommentRouter.get('/GetOneComment/:id', async(req,res)=>{
//     try {
//         const {id} = req.params
        
//                  const OneComment =  await Comment.findById(id)
//                  res.status(200).send({msg : "Data Details", OneComment})
//     } catch (error) {
//         res.status(500).send('Could not get one comment')
//     }
// })

CommentRouter.delete('/DeleteComment/:id',async(req,res)=>{
    try {
               const {id} = req.params
                 await Comment.findByIdAndDelete(id)
                 res.status(200).send('Comment deleted')
    } catch (error) {
          res.status(500).send('Could not delete Comment')
    }
})
CommentRouter.put('/UpComment/:id',async(req,res)=>{
    try {
            const {id} = req.params
         await Comment.findByIdAndUpdate(id,{$set : req.body})
        
        res.status(200).send('Comment updated')
        
    } catch (error) {
        res.status(500).send('Could not update Comment')
    }
})

module.exports = CommentRouter;
