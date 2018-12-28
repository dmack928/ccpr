// creates the express module
const express = require('express');

//create express app & logger
const app        = express ()
const logger     = require('morgan')
const bodyParser = require('body-parser');
const path       = require('path');
const fetch      = require ('node-fetch');

//create the port
const port    = 3000;






//create  routes

app.get('/', (req,res) => {
  res.send ('Test /')
});

app.get('/aboutme',(req,res) =>{
  res.send ('about me info')
});

app.get('/posts', (req,res) =>{
  //fetch the api data
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => { res.send({data}) })
})






// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

