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



// create a helper function that render server informatin in the browser

function display(req, res) {
  res.json({
    'req.params': req.params,
    'req.url'   : req.url,
    'req.query' : req.query,
    'req.body'  : req.body

  })
};


//create home route

app.get('/', (req,res) => {
  res.send ('Test /')
});

app.get('/aboutme',(req,res) =>{
  res.send ('aboutme info')
});

app.get('/posts', (req,res) =>{
  //fetch the api data
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(respnse => response.json())
  res.render('posts')
})






// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

