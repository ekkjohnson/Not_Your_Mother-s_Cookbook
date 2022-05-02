require('dotenv').config()
const path = require('path')
const express = require('express')
const session = require('express-session')
// const ehb = require('express-handlebars')
const routes = require('./controllers')

const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const server = express()
const PORT = process.env.PORT || 3001

// const hb = ehb.create({ helpers })

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

server.use(session(sess))

// server.engine('handlebars', hb.engine);
// server.set('view engine', 'handlebars');

server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')))

server.use(routes);

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Server running on Port: ${PORT}. http://localhost:${PORT}`))
})