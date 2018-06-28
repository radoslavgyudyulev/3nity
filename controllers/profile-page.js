const DoctorSchema = require('../models/Diseases')

module.exports = (req, res) => {
    const counter = JSON.parse(req.query.counter)
    
    DoctorSchema.find({}).limit(counter)
    .then(response => res.json(response))
}