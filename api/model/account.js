const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: "Sample"
})
var Account = mongoose.model('Sample', accountSchema)

module.exports = { Account };