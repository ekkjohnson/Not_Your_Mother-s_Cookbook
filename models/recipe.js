const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        directions: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        user_id: {
            //user id
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'recipes'
    }
);

module.exports = Recipe;