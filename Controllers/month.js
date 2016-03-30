'use strict';
// Dependencies
var mongoose        = require('mongoose');
var Month            = require('../models/Month.js');


// Opens App Routes
module.exports = function(app) {
	app.get('/month', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
        var query = Month.find({});
        query.exec(function(err, month){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(month);
        });
    });

        // Provides method for saving new users in the db
    app.post('/month', function(req, res){
      
        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newmonth = new Month(req.body);

        // New User is saved in the db.
        newmonth.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });


	};