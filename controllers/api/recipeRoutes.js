const router = require('express').Router()
const data = require('../../sampleData')

router.get('/', (req, res) => {
    res.json('Recipe Page!')
})


module.exports = router;