// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// TERMINAL
// $ npm init
// $ npm install express --save 
// $ node app.js

// BROWSER (Go to: http://localhost:3000)