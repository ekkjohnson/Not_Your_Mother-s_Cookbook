const { Model, DataTypes } = require('sequelize')
const bc = require('bcrypt');
const sequelize = require('../config/connection')

class User extends Model {
    checkPassword(password) {
        return bc.compareSync(password, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bc.hash(newUser.password, 8)
                return newUser
            },
            beforeUpdate: async (updatedUser) => {
                updatedUser.password = await bc.hash(updatedUser.password, 10)
                return updatedUser
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'users'
    }
)

module.exports = User