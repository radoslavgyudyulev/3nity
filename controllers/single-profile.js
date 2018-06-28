const Doctor = require('../models/Diseases')

module.exports = (req, res) => {
    const reqId = req.params.userId
    console.log(reqId)
    Doctor.find({_id: reqId})
      .then(response => res.json(response))
      .catch(err => console.log(err))
    
}