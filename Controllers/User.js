'use strict';
// Dependencies
var mongoose        = require('mongoose');
var jwt        = require('jsonwebtoken');
var User            = require('../models/User.js');
/*var Room            = require('./models/Room');*/


// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/user', function(req, res){
        console.log("in get")
        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, user){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(user);
        });
    });

app.post('/authenticate', function(req, res){
  var userid = req.body.userid;
      var  password = req.body.password;
        console.log(userid)
    User.findOne({
    "userid":userid
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          userid:user.userid,
          roomname:user.roomname,
          username:user.username

        });
      }   

    }

  });
});















  /*  app.get('/authenticate', function(req, res){
        console.log("in get")
        userid = req.headers['userid']
        password = req.headers['password']
        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({"userid":userid,"password":password});
        query.exec(function(err, user){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(user);
        });
    });*/
/*    app.post('/authenticate', function(req, res) {
    User.findOne({userid: req.body.email, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
               res.json({
                    type: true,
                    data: user,
                    token: user.token
                }); 
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });    
            }
        }
    });
});*/


       app.get('/user/:userid', function(req, res){
         var userid = req.params.userid;
        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({"userid":userid});
        query.exec(function(err, room){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(room);
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/user', function(req, res){
        console.log("in post")
        console.log(req.body)
        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new User(req.body);
        console.log(newuser)

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
};  
