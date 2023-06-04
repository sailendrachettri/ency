const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users = require('../models/Users')
const { body, validationResult } = require('express-validator')

const JWT_SECRET = "thisIsASecretKey"

const router = express.Router()

// Create a user using POST '/encryasmi/v1/auth
router.post('/signup', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
    body('phone', "Enter a valid phone").isLength({ min: 10 }).isNumeric(),

], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check if the user with same email exist already
        let user = await Users.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "A user with this email already exist." })
        }

        const salt = await bcrypt.genSalt(10)
        const securePasswor = await bcrypt.hash(req.body.password, salt)


        // create a new user
        user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: securePasswor,
            phone: req.body.phone,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({ authtoken })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Something went wrong!")
    }

})

module.exports = router