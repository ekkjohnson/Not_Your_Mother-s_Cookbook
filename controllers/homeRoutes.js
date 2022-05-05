const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/api/users/login')
        }
        res.redirect('/api/recipes')
    } catch (err) {
        res.json(err)
    }
})



module.exports = router;