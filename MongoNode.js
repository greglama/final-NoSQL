const express = require("express");
const mongoose = require('mongoose');

const ip = "mongodb://localhost/";
const db = "DBComp"
const collection = "companies";

mongoose.connect(ip+db);
let companySchema = mongoose.Schema({
});

let company = mongoose.model(collection, companySchema);

let query = "";

const http = require('http');
const app = express();

app.set('port', 8080);

var server = http.createServer(app);
app.use(express.static('public'))
server.on('listening', onListening);
server.listen(8081);

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.get('/login', (req, res) => {
  res.sendFile('public/login.html' , { root : __dirname});
})

app.post('/query/:nbReq', (req, res) => {
  let queryNmbr = req.params.nbReq
  let queryRes = ""
  switch(queryNmbr) {

    case "1":
      var nbProducts = 3
      company.find({ $where: "this.products.length > " + nbProducts }).limit(10).exec(function (err, result) {
        if (err) return handleError(err);
        res.json(result)
      });
      break;

    case "2":
      var nmbrOfEmployees = 300000

      company.aggregate([{$match: {number_of_employees: {$gt: nmbrOfEmployees}}}, 
          {$project: {number_of_employees: 1, name: 1}}, 
          {$sort: {number_of_employees: -1}}, 
          {$limit: 10}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;

    case "3":
      company.aggregate([{$sort: {category_code: -1}},
          {$project: {number_of_employees: 1, category_code: 1}},
          {$group:{_id:"$category_code", employesMax:{$max:"$number_of_employees"}}}, 
          {$limit: 10}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;

    case "4":
      company.aggregate([{$unwind: "$offices" }, 
        {$group: {_id : "$offices.city", companies: { $push: "$name" }, count: { $sum: 1 }}}, 
        {$limit: 10}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;

    case "5":
      var year = 2000
      company.aggregate([{$match: {founded_year: {$lt: year}}}, 
        {$match: {providerships: {$size:2}}}, 
        {$project: {founded_year: 1, providerships: 1}}, 
        {$limit: 10}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;
  }
  
})

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

