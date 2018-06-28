// Diseases.js
const mongoose = require('mongoose');  

const Diseases2 = new mongoose.Schema({
    "0" : {type: String}, 
});

mongoose.model('Diseases2', Diseases2);
module.exports = mongoose.model('Diseases2');