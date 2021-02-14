const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 8081;
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/xmeme";

//Entry point for our Node application
const server = http.createServer(app);

//Connecting to the local database
mongoose
.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then((result) => {
    console.log("Connected to MongoDB");
    server.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
})
.catch((err) => {
    console.log(err); 
});