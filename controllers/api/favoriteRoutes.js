const router = require('express').Router()
const { Recipe, User, Favorite } = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', async (req, res) => {

    const favoriteData = await Favorite.create({
        user_id: req.session.user_id,
        recipe_id: req.body.recipe_id
    })
    res.json(favoriteData)
})

router.delete('/:id', async (req, res) => {
    const removeFavorite = await Favorite.destroy({
        where: {
            recipe_id: req.body.recipe_id
        }
    })
    res.json(removeFavorite)
})



module.exports = router;