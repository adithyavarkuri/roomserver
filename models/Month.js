var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var MonthSchema = new Schema({
    MonthId: {type: String, required: true,unique: true },
     Amount: {type: Number, required: true}
 	});
// Indexes this schema in 2dsphere format (critical for running proximity searches)
MonthSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('month', MonthSchema);