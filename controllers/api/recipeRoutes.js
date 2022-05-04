const router = require('express').Router()
const { Recipe, User } = require('../../models')
const withAuth = require('../../utils/auth')


router.get('/', withAuth, async (req, res) => {

    const recipeData = await Recipe.findAll({
        include: [{
            model: User,
            attributes: ['username']
        }]
    })

    const recipes = recipeData.map((project) => project.get({ plain: true }))

    try {
        res.render('recipe', {
            recipes
        })
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;