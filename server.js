// Packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const config = require('./config/config')
const controllers = require('./controllers')
const logger = require('morgan')

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

// Routes
app.get('/api/profile', controllers.profilePage)
app.post('/api/create', controllers.createPage)
app.get('/api/profile/:userId', controllers.singleProfile)
app.get('/api/search', controllers.search)