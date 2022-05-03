require('dotenv').config()
const path = require('path')
const express = require('express')
const ehb = require('express-handlebars')
const routes = require('./controllers')

// Authentication Packages
const session = require('express-session')

const sequelize = require('./config/connection')
const PORT = process.env.PORT || 3001
const server = express()


// Handlebars Setup

const hb = ehb.create()
server.engine('handlebars', hb.engine);
server.set('view engine', 'handlebars');

server.use(express.json())
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')))

// Session Setup

server.use(session({
    secret: 'hk12h3k2fsc',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  }))

server.use(routes);

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Server running on Port: ${PORT}. http://localhost:${PORT}`))
})