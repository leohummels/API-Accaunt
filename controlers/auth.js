const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async(req, res) => {
    const user = await User.create(req.body);
    return res.send(user);
});

module.exports = app => app.use('/auth', router);