const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config.json");
const verifyToken = require("../_helpers/jwt-auth");

const Account = require("./account.model");
/* 
 * Define all routes
 */
router.post('/register', register);
router.post('/authenticate', login);
router.get('/:id', verifyToken, getById)
router.get('/', verifyToken, getAll)
router.delete('/:id', verifyToken, deleteUser)

// Export the routers
module.exports = router;



/**************
 * Registration
 **************/
async function register(req, res){
    const { firstname, lastname, phone, email, password, category, state, newsletter} = req.body;
    try {
        let user = await Account.findOne({ email });
        if(user){
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create new user objects
        user = new Account({
            firstname,
            lastname,
            phone,
            email,
            password,
            category,
            state,
            newsletter
        })

        // Hash user password
        user.password = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        // Store new user
        await user.save();

        return res.status(200).json({ message: "Registration is successful" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error: Operation was not successful" });
    }
}

/**************
 * Login
 **************/
async function login(req, res){
    const { email, password } = req.body;
    try {
        const user = await Account.findOne({ email });

        // Check if the email exist
        if(!user){
            return res.status(400).json({ message: "Incorrect email" });
        }

        // Check if password match hashed password
        if(!bcrypt.compareSync(password, user.password)){
            return res.status(400).json({ message: "Incorrect email or Password" });
        }

        // Check if user have their email account
        if(!user.is_verified){
            return res.status(400).json({ message: "This account have have not been verified, follow the link in your email to verify account" });
        }

        // Generate user login token (token expires in 2 hours)
        const token = jwt.sign({ sub: user._id, id: user._id, email: user.email }, config.secret, { expiresIn: '2h' });
        // return back data to the user
        return res.status(200).json({...user.toJSON(), token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error: Operation was not successful" });
    }
}

async function getById(req, res) {
    const { id } = req.params;
    try {
        const user = await Account.findById(id);

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error: Operation was not successful" });
    }
}

async function getAll(req, res) {
    try {
        const users = await Account.find();

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error: Operation was not successful" });
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        const user = await Account.findByIdAndRemove(id);

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error: Operation was not successful" });
    }
}