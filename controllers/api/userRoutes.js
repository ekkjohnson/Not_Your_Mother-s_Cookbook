const router = require('express').Router()
const { User } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', withAuth, async (req, res) => {
  try {
    res.redirect('/api/recipes')
  } catch (err) {
    res.json(err)
  }
})

router.get('/login', async (req, res) => {
  try {
      res.render('login')
  } catch (err) {
      res.json(err)
  }
})

router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      const validPassword = await dbUserData.checkPassword(req.body.password);
      
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.json(err)
    }
  });

router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    })
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json({ user: newUser, message: 'You are now logged in!' });
      });


    
  } catch (err) {
    res.json(err)
  }
})

router.post('/logout', (req, res) => {
  if(req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(204).end()
  }
})

module.exports = router;