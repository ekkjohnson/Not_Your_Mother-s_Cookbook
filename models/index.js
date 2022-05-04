const Recipe = require('./Recipe')
const User = require('./User')
const Favorite = require('./Favorite')

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.belongsToMany(Recipe, {
    through: {
        model: Favorite,
        unique: false,
    },
    as: 'user_favorite_recipe'
})
Recipe.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false,
    },
    as: 'recipe_favorite_by_user'
})

module.exports = { Recipe, User, Favorite };