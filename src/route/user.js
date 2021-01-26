const express = require('express')
const User = require('../model/user')
const auth = require('../middleware/auth')

const router = express.Router()

// creating an user
router.post('/api/customer/signup', async (req,res) => {
    try{
        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).send(`Password didn't match!`)
        }
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
})

// user login
router.post('/api/customer/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
})


// Reading an user account

router.get('/api/customer/me', auth, async (req,res) => {
    try{
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router