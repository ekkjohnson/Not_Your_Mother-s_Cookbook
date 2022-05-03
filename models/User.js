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
            type: DataTypes.STRING,
            allowNull: false,
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
                updatedUser.password = await bc.hash(updatedUser.password, 8)
                return updatedUser
            },
        },
        sequelize,
        underscored: true,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User;