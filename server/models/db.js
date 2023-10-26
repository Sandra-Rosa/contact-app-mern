const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:String,
    number:Number
})
const contactModel = mongoose.model('contact',contactSchema);
module.exports = contactModel;