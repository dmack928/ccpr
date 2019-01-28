// REQUIRE MODULES
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

// INIT EXPRESS
const app = express();

// PORT
const port = 3000;

// DEFINE VIEWS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// QUESTIONS & ANSWERS
const questions = [
'Tell me a little bit about yourself?',
'What excites you about technology?',
'What is your preferred technology stack?',
'What are your favorite hobbies?'
];
const answers = [
'I\'m Danny Mackey and I come from a very strong background in Medicine, I decided to change carrer paths as I saw an opportunity to pursue what I love to do which is building things.',
'Technology is exciting in so many different ways, it\'s constantly changing so in a sense we never stop learning which I think is great.',
'Ideally I would like to work in Ruby and Rails although lately I have been working ona  few side projects in Vue js and Nuxt Js and have found them both to be very exciting with how easy it is to get applications running on and off the ground.',
'My favorite hobbies include spending time with my wife and daughter, watching sports and writting about fantasy football'
];

// ROUTES
app.get('/posts', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    res.render('posts.ejs', {
      data: data
    });
  });
});

app.get('/aboutme', (req, res) => {
  res.json({questions, answers});
});

app.get('/aboutme/description', (req, res) => {
  const question = questions[0];
  const answer = answers[0];
  res.json({question, answer});
});

app.get('/aboutme/tech', (req, res) => {
  const question = questions[1];
  const answer = answers[1];
  res.json({question, answer});
});

app.get('/aboutme/techstack', (req, res) => {
  const question = questions[2];
  const answer = answers[2];
  res.json({question, answer});
});

app.get('/aboutme/hobbies', (req, res) => {
  const question = questions[3];
  const answer = answers[3];
  res.json({question, answer});
});

// HANDLE 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// TELL SERVER TO LISTEN ON PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
