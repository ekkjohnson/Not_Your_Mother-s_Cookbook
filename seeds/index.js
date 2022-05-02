const sequelize = require('../config/connection');
const { Recipe, User } = require('../models');

const recipeData = require('./recipeData.json')
const userData = require('./userData.json')

const seedDatabase = async () => {
    try {
    await sequelize.sync({ force: true });

    await Recipe.bulkCreate(recipeData)
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
  }) 

    } catch (err) {
        console.log(err);
    }

};

seedDatabase();
