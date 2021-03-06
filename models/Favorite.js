const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Favorite extends Model {}

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'recipe',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'favorite',
        underscored: true,
    }
);

module.exports = Favorite;