const Doctor = require('../models/Doctor')

module.exports = (req, res) => {
const search = req.query.search
console.log(search)

let query = Doctor.find({})

if (search) {
    query = query.where('personalProfile.specialty').regex(new RegExp(search, 'i'))
}
    query             
        .sort('-createdAt')
        .then(users => {
            res.json(users)                 
            })   
}