// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var votesubSchema = mongoose.Schema({
  subject_name : {
    type:String,
    required : true
  },
  address : {
    type: String,
    required : false
  }
  voter : {
    type : Array
  }
});

module.exports.voteit = (newvotesub, callback) => {
  newvotesub.save(callback);
}
// create the model for users and expose it to our app
module.exports = mongoose.model('VoteSub', votesubSchema);
