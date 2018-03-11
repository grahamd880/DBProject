var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var shasum = crypto.createHash('sha512');
var sequelize = require('sequelize');
var models = require('../modles');
var tables = ['Persons','Customers','Employees','Items','Reviews']

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Admin' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  //shasum.update(password,'utf8');
  //shasum.digest('utf8');
  //console.log(shasum);

  res.render('admin', { title: 'Database Administration', tables: tables});
});

router.get('/getTable/:table', function(req,res,next){
  var table = req.params.table;
  switch(table){
    case 'Persons':
    models.person.findAll().then(persons =>{
      res.send(person);
      persons.array.forEach(person => {
        console.log(person.get('username'));
      });
    });
    case 'Customers':
    models.customer.findAll().then(customers =>{
      res.send(customers);
    });
    case 'Employees':
    models.employee.findAll().then(employees =>{
      res.send(employees);
    });
    case 'Items':
    models.item.findAll().then(items =>{
      res.send(items);
    });
    case 'Reviews':
    models.reviews.findAll().then(reviewss =>{
      res.send(reviewss);
    });

    break;
    default:
    break;
  }
  res.send();
});

router.get('/fillTables', function(req, res, next) {
  
  res.render('admin', { title: 'Database Administration', tables: tables});
});

router.get('/clearTables', function(req, res, next) {
  res.render('admin', { title: 'Database Administration', tables: tables});
});

module.exports = router;
