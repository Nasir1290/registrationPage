// initialization 👇
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./router/router');
const app = express();
dotenv.config();
const port = process.env.PORT;
const db_password = process.env.DB_PASSWORD;
const bcrypt = require ('bcrypt');
const cookieParser = require('cookie-parser')


// middle wars 👇
app.use(express.json());
app.use(cors());

// routes 👇
app.use('/users', router)


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