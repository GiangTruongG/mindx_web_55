const express = require('express');
const AuthCtrl = require('../controllers/AuthController');

const router = express.Router();

router.post('/login', async (req, res) => {
    // ToDo: validation

    // Call logic
    try {
        const loginInfo = await AuthCtrl.login(req.body.username, req.body.password);
        res.json(loginInfo);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


router.post('/register', async (req, res) => {
    // Validation
    if(!req.body.password || req.body.password.length < 6) {
        res.status(400).send('Password ought to contain at least 6 characters');
        return;
    }
    // Call logic
    try {
        const newUser = await AuthCtrl.register(req.body.username, req.body.email, req.body.password);
        res.json(newUser);
    } catch (error) {
        res.status(409).send(error.message);
    }
});

module.exports = router;