const express = require('express');
const config = require('./config');

const app = express();

app.listen(config.port, () => {
  console.log(`app listen ${config.port}`)
}); 

app.get('/image/:name', (req, res) => {
  res.sendFile(`${req.params.name}`, { root: config.pictureDir})
})