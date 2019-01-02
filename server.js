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
app.get('/aboutme', (req,res) => {

  app.get('/aboutme/description', (req, res) => {
    res.render('aboutme.ejs', {
      question: 'Tell me a little bit about yourself?',
      answer: 'description...'
    });
  });

  app.get('/aboutme/tech', (req, res) => {
    res.render('aboutme.ejs', {
      question: 'What excites you about technology?',
      answer: 'tech...'
    });
  });

  app.get('/aboutme/techstack', (req, res) => {
    res.render('aboutme.ejs', {
      question: 'What is your preferred technology stack?',
      answer: 'techstack...'
    });
  });

  app.get('/aboutme/hobbies', (req, res) => {
    res.render('aboutme.ejs', {
      question: 'What are your favorite hobbies?',
      answer: 'hobbies...'
    });
  });

  var questions = [
    'Tell me a little bit about yourself?',
    'What excites you about technology?',
    'What is your preferred technology stack?',
    'What are your favorite hobbies?'
  ];

  var answers = [
    'I enjoy cooking, eating out, trying different foods, and spending time with my family',
    'How everyday there is something new out there to learn everyday, how helpful the community is. ',
    'Ruby On Rails coding on a whole is a joy to me but coding in rails is my favorite to use.',
    'I enjoy fishing, sporting events, hikes camping and swimming.'
  ];

  res.render('aboutme.ejs', {
    questions: questions,
    answers: answers
  });
});

app.get('/posts', (req,res) =>{
  //fetch the api data
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    res.render('posts.ejs', {
      data: data
    });
  });
});






// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
