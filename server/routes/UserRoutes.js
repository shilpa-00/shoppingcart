const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secretkey'

router.post('/register', async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        res.status(401).json({ error: 'Email ID already registered' })
    }
    else {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        try {
            const result = await user.save()
            res.json(result)
            // console.log(result)
        }
        catch (error) {
            res.send('Error')
        }
    }
})

router.post('/login', async (req, res) => {
    try {
        const currentuser = await User.findOne({ email: req.body.email })
        if (!currentuser) {
            res.status(401).json({ error: 'Email not registered' })
        }
        else {
            if (currentuser.password === req.body.password) {
                jwt.sign({ currentuser }, SECRET_KEY, (err, token) => {
                    if (!err) {
                        res.status(200).json({_id:currentuser._id,name:currentuser.name,token:token})
                    }
                })
            }
            else {
                res.status(401).json({ error: 'Invalid password' })
            }
        }
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = router