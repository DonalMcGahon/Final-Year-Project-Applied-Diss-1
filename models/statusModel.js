var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique : true},
    date: {type: Date, required: true},
    text: {type: String, required: true},
    bitcoinAddress: {type: String, required: true, unique : true},
    receivingAddress: {type: String, required: true, unique : true},
    lat: {type: Number, required: true}, 
    long: {type: Number, required: true}
    },
    { collection : 'Status' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Status', schema);