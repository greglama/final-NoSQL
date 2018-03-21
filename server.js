const express = require("express");

const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html');
  })

app.post('/query', function(req, res){
	const body = JSON.stringify(req.body);
	res.send(req.body);
});

