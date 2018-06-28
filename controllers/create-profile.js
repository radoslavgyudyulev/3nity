const DoctorSchema = require('../models/Diseases')
const randomstring = require("randomstring");
const data = require('../doctors.json')

module.exports = (req, res) => {

       const userId = randomstring.generate({
            length: 25,
            charset: 'alphabetic'
          });


    const { uin, praktika,ime, prezime,
           familiq, pol, adres1, adres2,
           pkod, grad, strana, tel1, tel2 } = req.body

        DoctorSchema.create({
            "УИН": uin,
            "практика": praktika,
            "име": ime,
            "презиме": prezime,
            "фамилия": familiq,
            "пол": pol,
            "адрес_1": adres1,
            "адрес_2": adres2,
            "п_код": pkod,
            "гр_с": grad,
            "страна": strana,
            "тел_1": tel1,
            "тел_2": tel2, 
            "userId": userId,
        },
         (err, user) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database." + '   ' + err);
            res.status(200).send('User was created');
        })
        
    

    // DoctorSchema.create({
    //     "УИН": uin,
    //     "№–практика": praktika,
    //     "име": ime,
    //     "презиме": prezime,
    //     "фамилия": familiq,
    //     "пол": pol,
    //     "адрес_1": adres1,
    //     "адрес_2": adres2,
    //     "п.код": kod,
    //     "гр./с": grad,
    //     "страна": strana,
    //     "тел.1": tel1,
    //     "тел.2": tel2, 
    //     userId: userId 
    // }, (err, user) => {
    //     if (err) return res.status(500).send("There was a problem adding the information to the database.");
    //     res.status(200).send('User was created');
    // })
}
