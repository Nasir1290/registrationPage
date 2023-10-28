const express = require('express');
const { newUser } = require("../controller/userController");
const router = express.Router();


router.post('/', newUser)
    .get('/', (req, res) => {
        res.json({ status: 'ok' })
    })
    .get('/hello', (req, res) => {
        res.send('hello world')
    })

module.exports = router;