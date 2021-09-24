const { DataTypes, Model } = require('sequelize')

const sequelize = require('../config/db')

class WorkoutExercise extends Model {

}

WorkoutExercise.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    

    },

    exerciseId: {
        type: DataTypes.UUIDV4,
        allowNull: false,

    },

    workoutId: {
        type:DataTypes.UUIDV4,
        foreignKey: true,
    }
},{
    sequelize
})

module.exports = WorkoutExercise