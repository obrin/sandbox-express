const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World');
})

app.get('/ping', (request, response) => {
  response.send('pong');
})

app.listen(port, () => console.log('listening on port:', port))
