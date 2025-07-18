const User = require("../Models/User");
var jwt = require ('jsonwebtoken'); 
exports.isAuth= async (req,res,next)=>{
    try {
        const token = req.header('Autorized')

        var decoded = jwt.verify(token, process.env.privatekey);

        if (!decoded) {
            return res.status(400).send({errors : [{msg : 'wrong token'}]})
        }

        const found = await User.findById(decoded.id)

        req.user = found 
        next ()
    } catch (error) {
        res.status(500).send({errors : [{msg : 'wrong token'}]})
    }
}