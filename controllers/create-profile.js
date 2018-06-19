const DoctorSchema = require('../models/Doctor')
const randomstring = require("randomstring");

module.exports = (req, res) => {

    const userId = randomstring.generate({
        length: 15,
        charset: 'alphabetic'
      });

    const { firstName, lastName,
            specialty, personalNumber,
            workNumber, email, city, street, title } = req.body
    DoctorSchema.create({
        personalProfile: {
            title: title,
            firstName: firstName,
            lastName: lastName,
            specialty: specialty,
            personalNumber: personalNumber,
            workNumber: workNumber,
            email: email,
            location: {
                city: city,
                street: street
            },
          },       
        userId: userId 
    }, (err, user) => {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send('User was created');
    })
}
