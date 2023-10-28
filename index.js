// initialization 👇
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();
const port = process.env.PORT;
const db_password = process.env.DB_PASSWORD;
const router = express.Router();

// middle wars 👇
app.use(express.json());
app.use(cors());
app.use('/user', router)

// methods 👇

router.post('/', (req, res) => {
    console.log('data from client', req.body)
    res.json({ status: 'ok' })
})
    .get('/', (req, res) => {
        res.json({ status: 'ok' })
    })


// mongoose connection👇
const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://NasirMia:${db_password}@mydatabase.nhior4u.mongodb.net/crudApplication`)
        console.log('Data-base connected successfully!!!')
    } catch (error) {
        console.log('Error occured while connecting database: =>', error)
    }
}
dbConnection()

// server listening👇
app.listen(port, () => {
    console.log(`Server running successfully on port ${port}`)
})