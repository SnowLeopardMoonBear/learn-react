var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mandalartSchema = new Schema({
    user: String, 
    mandalart: Array
});

module.exports = mongoose.model('mandalart', mandalartSchema);