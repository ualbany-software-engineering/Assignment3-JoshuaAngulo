const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
}); // IF you get a GET on '/' send 'Hello World' as a response'

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.
