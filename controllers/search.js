const Doctor = require('../models/Diseases');

module.exports = (req, res) => {
    
const search = req.query.search
const counter = JSON.parse(req.query.count)

let query = Doctor.find({})

if (search) {
    query = query.where('грс').regex(new RegExp(search, 'i'))
}
    query     
        .sort('-createdAt')
        .limit(counter) 
        query.exec((err, users) => {
            if(err => console.log('err ' + err))
            res.json(users)
        })
}