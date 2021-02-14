const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const memeRoutes = require('./api/routes/memes');

//Middleware used to log post requests in the console
app.use(morgan('dev'));

//Middleware used to process the data returned in a post request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 
//Handling CORS errors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', '*');

    if(request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        return response.status(200).json({});
    }

    next();
})

//Middleware to forward all requests for /memes to respective file
app.use('/memes', memeRoutes);

//Handling 404 errors
app.use((request, response, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

//Middleware to catch all errors
app.use((error, request, response, next) => {
    //If no error status is recieved then we return 500 error
    response.status(error.status || 500);

    //This is the json data that is returned in case of an error
    response.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;