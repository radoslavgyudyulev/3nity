const Doctor = require('../models/Doctor')

module.exports = (req, res) => {
    const reqId = req.params.userId
    console.log(reqId)
    Doctor.find({userId: reqId})
      .then(response => res.json(response))
      .catch(err => console.log(err))
    
}