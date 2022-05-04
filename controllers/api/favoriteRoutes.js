const router = require('express').Router()
const { Recipe, User, Favorite } = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', async (req, res) => {

    const favoriteData = await Favorite.create({
        user_id: req.body.user_id,
        recipe_id: req.body.recipe_id
    })
    console.log(favoriteData);
    res.json(favoriteData)
})


module.exports = router;