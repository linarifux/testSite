const jwt = require('jsonwebtoken')
const User = require('../model/user')

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, 'voidarif')
        const user = await User.findOne({_id: data._id, 'tokens.token': token}, {tokens: 0, _id: 0})
        if(!user){
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    }catch(e){
        res.status(401).send('Please, Authenticate')
    }
}


module.exports = auth