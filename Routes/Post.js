const express = require('express')

const { AddPost, GetAllPosts, GetOnePost, DeletePost, UpdatePost, GetMyPosts } = require('../Controllers/Post')
const { isAuth } = require('../Middlewares/isAuth')

const postRouter = express.Router()


postRouter.post('/addPost', AddPost)

postRouter.get('/getAllPosts', GetAllPosts)

postRouter.get('/getOnePost/:id', GetOnePost)

postRouter.delete('/deletePost/:id', DeletePost)

postRouter.put('/updatePost/:id', UpdatePost)

module.exports = postRouter