const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user === null) res.status(404).json({ message: 'User has not found' });
        else {
            res.send(user);
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})



router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: await _encryptPassword(req.body.password)
    })
    try {
        const newUser = await user.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});




router.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
        await user.remove();
        res.json({ message: 'User has been deleted!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




router.patch('/:id', async (req, res) => {
    let user = await User.findById(req.params.id);

    if (req.body.name !== null) user.name = req.body.name
    if (req.body.email !== null) user.email = req.body.email

    try {
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})


router.post('/login', async (req, res) => {
    const user = await login(req.body.username, req.body.password);
    try {
        if(user){
            let newUser = user.toObject();
            delete newUser['password'];
            res.json(newUser);
        } 
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});


async function _encryptPassword(password) {
    console.log('pre encryption: ', password);
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('post encryption: ', hash);
    return hash;
}



async function _decryptPassword(password, hash) {
    const isMatched = await bcrypt.compare(password, hash);
    return isMatched;
}

async function login(email, password) {
    const newUser = await User.findOne({ email: email });
    const passwordIsCorrect = await _decryptPassword(password, newUser.password);
    if (email === newUser.email && passwordIsCorrect === true){
        return newUser;
    }
    else return 'Wrong username or password';
}



module.exports = router;