'use strict';
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;




var RoomSchema = new Schema({
    Roomname: {type: String, required: true,unique: true },
    Address: {type: String}
 	});
// Indexes this schema in 2dsphere format (critical for running proximity searches)
RoomSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('room', RoomSchema);