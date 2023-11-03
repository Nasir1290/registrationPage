const express = require('express');
const {  signUp, login, userVerification } = require("../controller/userController");
const { verifyToken } = require('../authentication/userAuth');
const router = express.Router();


router.post('/signup', signUp)
    .get('/', (req, res) => {
        res.json({ status: 'ok' })
    })
    .get('/hello', (req, res) => {
        res.send('hello world')
    })
    .post('/login',login)
    .get('/home',verifyToken,userVerification)

module.exports = router;