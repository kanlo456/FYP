const express = require('express');
const app = express();
const mongoose = require("mongoose");


const database = module.exports = () => {
    try {
        mongoose.connect('mongodb+srv://oscar:j3SGuIIQbqpiTcWA@cluster0.lpvxprh.mongodb.net/?retryWrites=true&w=majority')
        console.log('Database connected succesfully');
    } catch (error) {
        console.log('Database connection failed');
    }
}

database();

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})