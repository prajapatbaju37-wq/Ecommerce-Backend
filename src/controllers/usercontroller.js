const express = require('express');
const app = express();
const user = require('../models/usermodel');
const bcrypt = require('bcrypt');

app.post('/signup', async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({
                message: "Enter Email password & username"
            })
        }
        const existinguser = await user.findOne({ email });
        if (existinguser) {
            return res.status(400).json({
                message: "User Already Exists"
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const data = new user({
            email: email,
            password: hashedpassword,
            username: username
        });
        const response = await data.save();
        return res.status(201).json({
            message: "User Created!!",
            response: response
        })
    }
    catch (ex) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
});


module.exports = app;