const { DataTypes, Model } = require('sequelize')

const sequelize = require('../config/db')

class Workout extends Model {
    

}

Workout.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },
    userId:{
        type: DataTypes.UUIDV4,
        foreignKey: true,
    },

},{
    sequelize
})

module.exports = Workout