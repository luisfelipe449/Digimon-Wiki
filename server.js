const express = require('express');

const path = require('path')

const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('my-app/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("tudo funcionando certinho");
});
