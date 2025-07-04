const express = require ('express')
const { SignIn, SignUp } = require('../Controllers/User')
const { validSignUp, Validation, validSignIn } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')
const User = require('../Models/User')



const userRouter = express.Router()


userRouter.post('/SignUp',validSignUp,Validation, SignUp)


userRouter.post('/SignIn',validSignIn,Validation,SignIn )

userRouter.get('/CurrentUser', isAuth, (req,res)=> res.send(req.user))





userRouter.get('/getAllContacts', async(req,res)=>{
    try {
        const Users = await User.find()

        res.status(200).send({msg : 'Users list', Users})
    } catch (error) {
        res.status(500).send('Could not get Users')
    }
}
)


userRouter.put('/UpDate/:id', async(req,res)=>{
    try {
        const {id} = req.params

       await User.findByIdAndUpdate(id,{$set : req.body})

       res.status(200).send('Contact updated')
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
})


userRouter.delete('/Delete/:id', async (req, res)=>{
try {
    const {id} = req.params
  await  User.findOneAndDelete(id)
  res.status(200).send('Contact deleted')
} catch (error) {
    res.status(500).send('Could not delete contact')
}
})

module.exports= userRouter