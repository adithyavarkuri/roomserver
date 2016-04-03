'use strict';
// Dependencies
var mongoose        = require('mongoose');
var Items            = require('../models/Items.js');
var jwt        = require('jsonwebtoken');


// Opens App Routes
module.exports = function(app) {
	app.get('/items', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
        var name = req.query.asd
        console.log(name)

        var query = Items.find({});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: '',content:item });
        });
    });

    app.get('/getdefaultreport', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
        var userid = req.query.userid
          var monthid = req.query.monthId
          console.log(userid)
        console.log(monthid)

        var query = Items.find({"userid":userid,"monthId":monthid});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: '',content:item });
        });
    });

    app.get('/getroomreport', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
         var roomname = req.query.roomname
          var monthid = req.query.monthId
          console.log(roomname)
          console.log(monthid)

        var query = Items.find({"roomname":roomname,"monthId":monthid});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            console.log(item)
            res.json({ success: true, message: '',content:item });
        });
    });

    app.get('/getpersonmonthreport', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
         var userid = req.query.userid
          var monthid = req.query.monthId
          console.log(userid)
        console.log(monthid)

        var query = Items.find({"userid":userid,"monthId":monthid});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: '',content:item });
        });
    });

    
     /*app.get('/getmonthreport', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
         var roomname = req.query.roomname
          var monthid = req.query.monthId
          console.log(userid)
          console.log(roomname)
        console.log(monthid)

        var query = Items.find({"userid":userid,"roomname":roomname,"monthId":monthid});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: '',content:item });
        });
    });
*/
    




        // Provides method for saving new users in the db
    app.post('/item', function(req, res){
      
        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newitem = new Items(req.body);

        // New User is saved in the db.
        newitem.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            
             res.json({
          success: true,
          message: 'Details are saved Sucessfully',
        });
        });
    });

    app.delete('/deleteitem', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
         var id = req.query.id
        console.log(id)

        var query = Items.remove({"_id":id});
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: 'deleted',content:item });
        });
    });

    app.put('/updateitem', function(req, res){
        // Uses Mongoose schema to run the search (empty conditions)
         var id = req.query.id
        console.log(id)


        var query = Items.findOneAndUpdate({"_id":id},
        {
          items:req.body.items,
          totalamount:req.body.totalamount,
          monthId:req.body.monthId
        }

          );
        query.exec(function(err, item){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json({ success: true, message: 'updated',content:item });
        });

        
    });


	};