var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mandSchema = new Schema({
    id: String,
    mand_data: Array,
    published_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('mand', mandSchema);