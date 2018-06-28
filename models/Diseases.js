// Diseases.js
const mongoose = require('mongoose');  

const Diseases = new mongoose.Schema({
    "0" : {type: String,}, 
    "en" : {type: String}, 
    "bg" : {type: String}, 
    "de" : {type: String},
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

mongoose.model('Diseases', Diseases);
module.exports = mongoose.model('Diseases');