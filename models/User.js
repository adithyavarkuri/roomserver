var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;



var UsersSchema = new Schema({
	
    username: {type: String, required: true},
    userid: {type: String, required: true,unique: true},
    roomname: {type: String, required: true},
    password: {type: String, required: true},
   authToken: { type: String, default: '' }
});
// Indexes this schema in 2dsphere format (critical for running proximity searches)
UsersSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('user', UsersSchema);
