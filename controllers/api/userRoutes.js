const router = require('express').Router()
const {User} = require('../../models')
const bc = require('bcrypt')

router.get('/', async (req, res) => {
  try {
      res.render('login')
  } catch (err) {
      console.log(err);
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
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/register', async (req, res) => {
  try {

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    })
    if (newUser) {
      res.json(newUser)
    }
    
  } catch {

    res.json({message: 'nope!'})
  }
})

module.exports = router;