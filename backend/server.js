// in order to load environment variables from .env file
require('dotenv').config();
// call express framework, and create an instance of it
const express = require('express');
const routersCaller = require('./routes/workouts');
const app = express();
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




// start the server, in the specified port defined in the dotenv file.
app.listen(process.env.PORT, () => {
    console.log(`the server is running in ${process.env.PORT}`);
});