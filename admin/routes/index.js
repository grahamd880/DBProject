var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var shasum = crypto.createHash('sha512');
var sequelize = require('sequelize');
var models = require('../models');
var tables = ['People','Customers','Employees','Items','Shoes']

var checkAuthCookie = function(req){
  return new Promise(function(resolve,reject){
    if('cookies' in req && 'name' in req.cookies && 'token' in req.cookies){
      var nameCookie = req.cookies.name;
      var tokenCookie = req.cookies.token;
      models.employee.findOne({include:[{model:models.person}],where:{'$person.username$': nameCookie, token: tokenCookie}})
      .then(employee =>{
        if(employee){
          resolve(employee);
        }
        else{
          reject("Employee's cookie does not match");
        }
      })
    }
    else{
      reject("No cookie");
    }
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  checkAuthCookie(req).then(()=>{
    res.render('admin',{title: 'Admin', tables: tables});
  }).catch(err =>{
    console.log(err);
    res.render('index',{title: 'Admin'});
  })
});

router.post('/logout', function(req, res, next) {
  checkAuthCookie(req).then(employee =>{
    employee.update({token: null});
    res.redirect('http://192.168.50.26/admin');
  }).catch(err =>{
    console.log(err);
    res.redirect('http://192.168.50.26/admin');
  });
});

router.get('/login', function(req, res, next) {
  checkAuthCookie(req).then(() =>{
    res.redirect('http://192.168.50.26/admin');
  }).catch(err =>{
    console.log(err);
    res.render('login',{title: 'Admin'});
  })
});

router.post('/login',function(req,res,next){
  var name = null;
  var password = null;
  if('name' in req.body && 'password' in req.body){
    name = req.body.name;
    password = req.body.password;

    models.employee.findOne({include:[{model:models.person}], where:{'$person.username$': name, '$person.password$': password}})
    .then(employee =>{
      if(employee){
        var randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2,9);

        employee.update({token: randomNumber});
        res.cookie('token',randomNumber, {maxAge: 900000, httpOnly: false});
        res.cookie('name', name, {maxAge: 900000, httpOnly: false});
        res.redirect(302, '/admin');
      }
      else{
        var err = new Error('Unauthorized: Incorrect username/password');
        err.status = 401;
        next(err);
      }
    })
  }
  else{
    res.render('login',{title: 'Admin'});
  }
})

router.get('/getTable/:table', function(req,res,next){
  var table = req.params.table;
  switch(table){
    case 'People':
    models.person.findAll({attributes:['username','firstName','lastName','logged_on']}).then(person =>{
      res.send(person);
    });
    break;
    case 'Customers':
    models.customer.findAll({include: [{model:models.person}]}).then(customers =>{
      res.send(customers);
    });
    break;
    case 'Employees':
    models.employee.findAll({include: [{model:models.person}]},{attributes:['username','firstName','lastName','admin']}).then(employees =>{
      res.send(employees);
    });
    break;
    case 'Items':
    models.item.findAll().then(items =>{
      res.send(items);
    });
    break;
    case 'Shoes':
    models.shoe.findAll({include: [{model:models.item}]}).then(shoes =>{
      res.send(shoes);
    })
    break;
    case 'Reviews':
    models.reviews.findAll({include: [{model:models.person},{model:models.item}]}).then(reviewss =>{
      res.send(reviews);
    });
    break;
    default:
    var err = new Error('Table \'' + table + '\' Not Found');
    err.status = 404;
    next(err);
    break;
  }
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
    var ItemId;
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
    var ItemId;
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
      PersonId = person.get('id');
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
      PersonId = person.get('id');
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
      PersonId = person.get('id');
    });
    models.customer.bulkCreate([
      {registration_date:3/10/2018,personId:PersonId}
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

router.post('/deleteRow',function(req,res,next){
  console.log(req.body)
  var table = req.body.header.tableName
  
  var rowId = req.body.headers.rowId
 
  switch(table){
    case 'Customers':
    models.customer.destroy({where: {id:rowId}}).then(function(){
      res.sendStatus(200)
    });
    break;
    case 'Employees':
    models.employee.destroy({where: {id:rowId}}).then(function(){
      res.sendStatus(200)
    });
    break;
    case 'Shoes':
    models.shoe.destroy({where: {id:rowId}}).then(function(){
      res.sendStatus(200)
    });
    break;
    default:
    var err = new Error('Table \''+ table + '\' NotFound')
    err.status = 404;
    next(err);
    break;
  }
})

module.exports = router;
