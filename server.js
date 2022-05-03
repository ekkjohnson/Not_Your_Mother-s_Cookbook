require('dotenv').config()
const path = require('path')
const express = require('express')
const session = require('express-session')
const ehb = require('express-handlebars')
const routes = require('./controllers')

const sequelize = require('./config/connection')
const PORT = process.env.PORT || 3001

const server = express()

const hb = ehb.create()
server.engine('handlebars', hb.engine);
server.set('view engine', 'handlebars');

server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')))

server.use(routes);

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Server running on Port: ${PORT}. http://localhost:${PORT}`))
})