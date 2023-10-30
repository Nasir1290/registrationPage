const express = require('express');
const {  signUp, login } = require("../controller/userController");
const router = express.Router();


router.post('/signup', signUp)
    .get('/', (req, res) => {
        res.json({ status: 'ok' })
    })
    .get('/hello', (req, res) => {
        res.send('hello world')
    })
    .post('/login',login)

module.exports = router;