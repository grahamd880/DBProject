var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var shasum = crypto.createHash('sha512');
var sequelize = require('sequelize');
var models = require('../models');
var tables = ['Persons','Customers','Employees','Items','Shoes']

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
      res.send(customer);
    });
    case 'Employees':
    models.employee.findAll().then(employees =>{
      res.send(employee);
    });
    case 'Items':
    models.item.findAll().then(items =>{
      res.send(item);
    });
    case 'Shoes':
    models.shoe.findAll().then(shoes =>{
      res.send(shoe);
    })
    case 'Reviews':
    models.reviews.findAll().then(reviewss =>{
      res.send(reviews);
    });

    break;
    default:
    break;
  }
  res.send();
});

router.get('/fillTables', function(req, res, next) {
  models.person.bulkCreate([
    {username:'grahamdj',firstName:'david',lastName:'graham',password:'superSecret',logged_on:false},
    {username:'nrowbot',firstName:'nathan',lastName:'rowbotham',password:'superSecret2',logged_on:false},
    {username:'komodo',firstName:'logan',lastName:'miller',password:'superSecret3',logged_on:false}
  ]),
  models.item.bulkCreate([
    {brand:'nike',price:150.95,quantity_in_stock:35,model:'pegasus',picture:'somewhere'},
    {brand:'nike',price:120.99,quantity_in_stock:20,model:'structures',picture:'somewhere'},
    {brand:'hokaOneOne',price:150.20,quantity_in_stock:15,model:'Clifton3',picture:'nope'},

    {brand:'es',price:20.35,quantity_in_stock:20,model:'tee',picture:'none'},
    {brand:'nike',price:15.35,quantity_in_stock:50,model:'tee',picture:'none'},

    {brand:'garmin',price:125.99,quantity_in_stock:10,model:'forerunner',picture:'none'},

    {brand:'nature valley',price:15.55,quantity_in_stock:20,model:'none',picture:'none'}
  ]);

  models.item.findAll({
    attributes:['id'],
    where:{model:'pegasus'}
  }).then(items =>{
    var itemId;
    items.forEach(item =>{
      ItemId = item.get('id');
    });
    models.shoe.bulkCreate([
      {gender:"m",size:8.5,color:"blue",quantity_in_color:10,itemId:ItemId},
      {gender:"m",size:8.5,color:"white",quantity_in_color:10,itemId:ItemId},
      {gender:"m",size:8.5,color:"green",quantity_in_color:10,itemId:ItemId},
    ])
  });

  models.item.findAll({
    attributes:['id'],
    where:{model:'Clifton3'}
  }).then(items =>{
    var itemId;
    items.forEach(item =>{
      ItemId = item.get('id');
    });
    models.shoe.bulkCreate([
      {gender:"m",size:8.5,color:"blue",quantity_in_color:10,itemId:ItemId},
      {gender:"m",size:9,color:"white",quantity_in_color:10,itemId:ItemId},
      {gender:"m",size:10,color:"green",quantity_in_color:10,itemId:ItemId},
    ])
  });

  models.person.findAll({
    attributes:['id'],
    where:{username: 'grahamdj'}
  }).then(persons =>{
    var PersonId;
    persons.forEach(person =>{
      personId = person.get('id');
    });
    models.employee.bulkCreate([
      {admin:true,personId: PersonId}
    ])
  });

  models.person.findAll({
    attributes:['id'],
    where:{username: 'komodo'}
  }).then(persons =>{
    var PersonId;
    persons.forEach(person =>{
      personId = person.get('id');
    });
    models.employee.bulkCreate([
      {admin:false,personId:PersonId}
    ])
  });

  models.person.findAll({
    attributes:['id'],
    where:{username: 'nrowbot'}
  }).then(persons =>{
    var PersonId;
    persons.forEach(person =>{
      personId = person.get('id');
    });
    models.customer.bulkCreate([
      {personId:PersonId}
    ])
  });
  
  
  res.render('admin', { title: 'Database Administration', tables: tables});
});

router.get('/clearTables', function(req, res, next) {
  models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    .then(function(){
        return models.sequelize.sync({ force: true });
    })
    .then(function(){
        return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    })
    .then(function(){
        console.log('Database synchronised.');
        res.sendStatus(200)
    }, function(err){
        console.log(err);
        res.sendStatus(500)
    });
});

module.exports = router;
