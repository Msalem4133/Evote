const express = require('express')
const Vote = require('../models/vote')
const auth = require('../middleware/auth')
const { sendWelcomeEmail, sendConfirmationEmail } = require('../emails/account')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    const vote = new Vote({
        ...req.body,
        owner: req.user._id
    })
    console.log('3ashhhhhhhhhhhhh')
    const votebefore = await Vote.findOne({owner: req.user._id })
    if (!votebefore) {
        throw new Error()
    }
    try {
        await vote.save()
        
        sendConfirmationEmail(user.email, req.body.name);
        res.status(201).send(vote)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router