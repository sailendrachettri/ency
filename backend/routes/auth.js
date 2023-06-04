const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

// Create a user using POST '/encryasmi/v1/auth
router.post('/', (req, res) => {
    const user = Users(req.body)
    user.save()

    res.send(req.body)
})

module.exports = router