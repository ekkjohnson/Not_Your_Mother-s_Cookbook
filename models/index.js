const Recipe = require('./Recipe')
const User = require('./User')

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


module.exports = { Recipe, User };