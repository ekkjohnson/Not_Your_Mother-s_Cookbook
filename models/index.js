const Recipe = require('./Recipe')
const User = require('./User')

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Recipe, {
    onDelete: 'CASCADE'
})


module.exports = { Recipe, User };