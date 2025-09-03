// in order to load environment variables from .env file
require('dotenv').config();
// call express framework, and create an instance of it
const express = require('express');
const routersCaller = require('./routes/workouts');
const app = express();
const mongoose = require('mongoose');
// middleware 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});



// define our primary route, and get json response
app.get('/', (req, res) => {
    res.json({ msg: 'Server is running!' });
});



// call routers
app.use('/api/workouts', routersCaller);
//cvwpTl9YyOcTtPUp
// connect to the data base
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Database connected successfully. Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1);
    });
