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

    const recipes = recipeData.map((project) => project.get({ plain: true }))

    try {
        res.render('recipe', {
            recipes,
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

router.post('/add', async (req, res) => {
    try {
        
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id
        })
        console.log(newRecipe);
        res.json(newRecipe)

    } catch (err) {
        res.json(err)
    }
})

module.exports = router;