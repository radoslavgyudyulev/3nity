const DoctorSchema = require('../models/Doctor')

module.exports = (req, res) => {
    DoctorSchema.find({})
    .then(response => res.json(response))
}