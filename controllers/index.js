const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api');
const withAuth = require('../utils/auth');

router.use('/', homeRoutes)
router.use('/api', apiRoutes);

router.get('*', withAuth, async (req, res) => {
    res.redirect('/api/recipes')
})

module.exports = router;


