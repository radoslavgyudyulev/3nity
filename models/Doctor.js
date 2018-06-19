// Credit-Information.js
const mongoose = require('mongoose');  

const Doctor = new mongoose.Schema({
  personalProfile: {
    title: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    specialty: { type: String, required: true },
    personalNumber: { type: Number, required: true },
    workNumber: { type: Number, required: true },
    email: { type: String, required: true },
    location: {
      city: { type: String, required: true },
      street: { type: String, required: true }
    } 
    
  },    
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  userId: { type: String, required: true, unique: true}
  
});

mongoose.model('Doctor', Doctor);
module.exports = mongoose.model('Doctor');