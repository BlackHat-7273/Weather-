// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');  //Express to run server and routes
const app = express();               //Start up an instance of app

// A middleware to parse our data 
const bodyParser = require('body-parser');

//configuring express to use body-parser as middle-ware 
app.use(bodyParser.urlencoded({ extended: false }));

// bodyParser will use Json() to parse our data
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());  // The use() function is used to connect the cors package to express

app.use(express.static('website')); //Inializing the main project folder
const port = 8800;

const server = app.listen(port, listening);
function listening() {      // A fuction used for debugging 
    console.log(`server is running on localhost:  ${port}`);
};

// GET function 
app.get("/all", function (req, res) {
    res.send(projectData);    // send() is used to send the projectData to the browser.  
});

//POST functiokn
app.post('/add', add)
function add(req, res) {
    projectData = req.body    // Appeding the request body to projctData obeject 
    res.send(projectData)     // Sending the data to the browser 
};
