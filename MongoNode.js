const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const ip = "mongodb://localhost/";
const db = "DBComp"
const collection = "companies";

const savedQueryCollection = "savedqueries";
let savedQuerySchema = mongoose.Schema({
  query:String
});

let queryModel = mongoose.model(savedQueryCollection, savedQuerySchema);


mongoose.connect(ip+db);
let companySchema = mongoose.Schema({
});

let company = mongoose.model(collection, companySchema);

let query = "";

const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/getQueries', (req, res) =>{
  queryModel.find(function (err, kittens) {
    if (err) return console.error(err);
    res.json(kittens);  
  })
})

app.get('/admin', (req, res) =>{
  res.sendFile('public/admin.html', {root : __dirname})
})

//-----------------------END POINTS--------------------------
app.post("/executeFullCustomQuery", (req, res) =>{
  if(req.body.query !== null && req.body.query !== "") {
    let query = req.body.query;
    let parametersList = req.body.parametersList;

    let params = parametersList.split(";").map(param => param.trim());
    let finalQuery = parseQuery(query, params);

    executeParsedQuery(finalQuery).then(result => res.json(result));
  }
  else
  {
    res.send("The sent query is empty");
  }
});

app.post("/saveQuery", (req, res) =>{
  if(req.body.query !== null && req.body.query !== "") {
    const data = [{"query":req.body.query}];
  
    queryModel.collection.insertMany(data, function(err,r) {});
    res.send("Query has been insert with success !");
  }
  else
  {
    res.send("Query insert failed !");
  }
});

app.post('/customquery', (req, res) => {
  let queryNmbr = req.body.query
  switch(queryNmbr) {

    case "1":
      var nbProducts = parseInt(req.body.nbProducts)
      var resLimit = parseInt(req.body.limit)

      company.find({ $where: "this.products.length > " + nbProducts }).limit(resLimit).exec(function (err, result) {
        if (err) return handleError(err);
        res.json(result)
      });
      break;

    case "2":
      var nmbrOfEmployees = parseInt(req.body.nbEmp)
      var resLimit = parseInt(req.body.limit)

      company.aggregate([{$match: {number_of_employees: {$gt: nmbrOfEmployees}}}, 
          {$project: {number_of_employees: 1, name: 1}}, 
          {$sort: {number_of_employees: -1}}, 
          {$limit: resLimit}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;

    case "5":
      var year = parseInt(req.body.year)
      var nbProviders = parseInt(req.body.nbProviders)
      var resLimit = parseInt(req.body.limit)

      company.aggregate([{$match: {founded_year: {$lt: year}}}, 
        {$match: {providerships: {$size:nbProviders}}}, 
        {$project: {founded_year: 1, providerships: 1}}, 
        {$limit: resLimit}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;
  }
  
})

app.post('/query', (req, res) => {
  let queryNmbr = req.body.query
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

      case "6":
      var year = 2000
      company.aggregate([{$match: {}}, { $sort : { "number_of_employees" : -1} }, {$limit: 20}])
        .exec(function (err, result) {
          if (err) return handleError(err);
          res.json(result)
      });
      break;
  }
  
})
//----------------Function---------------
const PARAM_SPLITER = "???";

const parseQuery = (query, params) =>{
    const arrayQuerry = query.split(PARAM_SPLITER);

    let finalQuery = "";

    for(let i = 0; i < arrayQuerry.length + params.length; i++)
    {
        if (i%2 == 0)
        {
            finalQuery += arrayQuerry[parseInt(i/2)];
        }
        else
        {
            finalQuery += params[parseInt(i/2)];
        }
    }

    return JSON.parse(finalQuery);
}

const executeParsedQuery = async (parsedQuery) =>
{
  try{
    const result = await company.aggregate(parsedQuery).exec();
    return result;
  }
  catch(err){
    console.log(err);
    return err;
  }
}


/**
 * Event listener for HTTP sever "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);

}