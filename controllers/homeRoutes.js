const router = require('express').Router()

router.get('/', async (req, res) => {
    res.json('Home Page!')
})

module.exports = router;