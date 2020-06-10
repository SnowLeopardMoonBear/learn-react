var mongoose = require('mongooose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
    user: String, 
    content: Array
});

module.exports = mongoose.model('content', contentSchema);