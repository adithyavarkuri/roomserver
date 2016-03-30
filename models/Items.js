var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;




var ItemsSchema = new Schema({
    userid: {type: String, required: true},
     items: [{
    item: { type : String, required: true },
    amount: { type : Number, required:true}
  }],
    totalamount: { type : Number, required:true},
    roomname: {type: String, required: true},
    monthId:{type: String, required: true}
});
// Indexes this schema in 2dsphere format (critical for running proximity searches)
ItemsSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('items', ItemsSchema);