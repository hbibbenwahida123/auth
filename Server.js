const express = require ('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const postRouter = require('./Routes/Post')
const CommentRouter = require('./Routes/Comment')




const app = express()

require ('dotenv').config()

ConnectDB()


app.use(express.json())

app.use('/auth', userRouter)


app.use('/Posts',postRouter)

app

app.use ('/Comment',CommentRouter)

app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))