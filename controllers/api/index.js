const router = require('express').Router()
const favoriteRoutes = require('./favoriteRoutes')
const recipeRoutes = require('./recipeRoutes')
const userRoutes = require('./userRoutes')

router.use('/favorites', favoriteRoutes)
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes)

module.exports = router;