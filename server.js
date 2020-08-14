'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

//Things we need don't need 11-22, don't need index.html file
//Find portfolio drop and drag into public folder