const router = require('express').Router()
const { Recipe, User } = require('../../models')

router.get('/', async (req, res) => {

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
router.get('/add', async(req, res)=>{
    try{
        res.render('addRecipe')
    } catch (err){
        console.log(err);
    }
})

module.exports = router;