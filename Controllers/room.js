'use strict';
// Dependencies
var mongoose        = require('mongoose');
var Room            = require('../models/Room.js');
/*var Room            = require('./models/Room');*/


// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/room', function(req, res){
        console.log("in get")
        // Uses Mongoose schema to run the search (empty conditions)
        var query = Room.find({});
        query.exec(function(err, room){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(room);
        });
    });


       app.get('/room/:roomName', function(req, res){
         var roomName = req.params.roomName;
        // Uses Mongoose schema to run the search (empty conditions)
        var query = Room.find({"Roomname":roomName});
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
    app.post('/room', function(req, res){
        console.log("in post")
       
        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newroom = new Room(req.body);
        console.log(newroom)

        // New User is saved in the db.
        newroom.save(function(err){
            if(err){
                res.send(err);
                
            }

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
};  
