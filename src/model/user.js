const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error('Invalid email address!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    birthday: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// hashing the password
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// Generating an authorization token
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'voidarif')
    user.tokens = user.tokens.concat({token})
    return token
}

// Verifying user credentials while logging in
userSchema.statics.findByCredentials = async (email, password) => {
    try{
        const user = await User.findOne({email})
        if(!user){
            throw new Error('Unable to login')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error('Unable to login')
        }
        return user
    }catch(e){
        res.status(400).send(e)
    }
}

const User = mongoose.model('user', userSchema)

module.exports = User