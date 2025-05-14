const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World from Dockerized Node.js App!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
{
  "name": "docker-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app",
  "main": "app.js",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node app.js"
  },
  "author": "",
  "license": "ISC"
}
