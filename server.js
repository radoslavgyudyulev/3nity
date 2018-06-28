// Packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const config = require('./config/config')
const controllers = require('./controllers')
const logger = require('morgan')

const Diseases2 = require('./models/Diseases2')

// Middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(logger('combined'))

// Setting up the server
app.listen(config.PORT, () => {
    console.log(`Listening on port: ${config.PORT}` )
})

// MongoDB Connection
require('./config/database')(config)

const Diseases = require('./models/Diseases')
// Routes
app.get('/api', (req, res) => {
    Diseases.find({})
    .then(response => res.json(response))
    
})

app.get('/api/profile/:userId', (req,res) => {
    const reqId = req.params.userId
    Diseases2.find({_id: reqId})
      .then(response => res.json(response))
      .catch(err => console.log(err))
})

app.get('/api/diseases', (req,res) => {
    Diseases2.find({}).then(response => res.json(response))
})