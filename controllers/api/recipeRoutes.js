const router = require('express').Router()
const { Recipe, User, Favorite } = require('../../models')
const withAuth = require('../../utils/auth')


router.get('/', withAuth, async (req, res) => {

    const recipeData = await Recipe.findAll({
        include: [{
            model: User,
            attributes: ['username', 'id']
        }]
    })
    const favoriteData = await Favorite.findAll()
    const favorites = favoriteData.map((favorite) => favorite.get({ plain: true}))
    const favoriteList = []
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].user_id == req.session.user_id) {
            const recipe = await Recipe.findByPk(favorites[i].recipe_id, {
                include: [{
                    model: User,
                    attributes: ['username', 'id']
                }]
            })
            favoriteList.push(recipe)
        }
    }
    const favs = favoriteList.map(fav => fav.get({ plain: true}))
    const recipes = recipeData.map((project) => project.get({ plain: true }))

    try {
        res.render('recipe', {
            recipes,
            favs
        })
    } catch (err) {
        res.json(err);
    }
})

router.get('/add', async(req, res)=>{
    try{
        res.render('addRecipe')
    } catch (err){
        res.json(err);
    }
})

router.post('/add', async (req, res) => {
    try {
        
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.json(newRecipe)

    } catch (err) {
        res.json(err)
    }
})

module.exports = router;