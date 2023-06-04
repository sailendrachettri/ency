const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users = require('../models/Users')
const { body, validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "thisIsASecretKey"

const router = express.Router()

// ROUTE 1: Create a user using POST '/encryasmi/v1/auth
router.post('/signup', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
    body('phone', "Enter a valid phone").isLength({ min: 10 }).isNumeric(),

], async (req, res) => {
    let success = false
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // check if the user with same email exist already
        let user = await Users.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: "A user with this email already exist." })
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

        success = true
        res.json({ success, authtoken })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Something went wrong!")
    }

})


// ROUTE 2: Authenticate a user using: POST
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be empty").exists()

], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        let user = await Users.findOne({ email })
        if (!user) {
            success = false;
            return res.status(400).json({ error: "invalid credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)

        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "invalid credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        success = true
        res.json({ success, authtoken })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Something went wrong!")
    }

})

// ROUTE 3: Get user details: Login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await Users.findById(userId).select("-passowrd")
        res.send(user)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Something went wrong!")
    }

})

module.exports = router