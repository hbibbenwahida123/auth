const express = require ('express')
const { SignIn, SignUp } = require('../Controllers/User')
const { validSignUp, Validation, validSignIn } = require('../Middlewares/Validator')



const userRouter = express.Router()


userRouter.post('/SignUp',validSignUp,Validation, SignUp)


userRouter.post('/SignIn',validSignIn,Validation,SignIn )




module.exports= userRouter