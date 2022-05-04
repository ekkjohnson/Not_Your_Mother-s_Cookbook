const router = require('express').Router()
const { Recipe, User, Favorite } = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', async (req, res) => {

    const favoriteData = await Favorite.create({
        user_id: req.body.user_id,
        recipe_id: req.body.recipe_id
    })
    // console.log(favoriteData);
    res.json(favoriteData)
})

router.get('/', async (req, res) => {
    const favoriteData = await Favorite.findAll({
        include: [{
            model: User,
            attributes: ['id', 'username']
        },
        {
            model: Recipe,
            attributes: ['id', 'name', 'ingredients', 'description']
        }
    ]
    })
    const favorites = favoriteData.map((favorite) => favorite.get({ plain: true}))
    
})


module.exports = router;