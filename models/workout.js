const { DataTypes, Model } = require('sequelize')

const sequelize = require('../config/db')

class WorkoutRoutine extends Model {
    

}

WorkoutRoutine.init({
        workout: {
            type: DataTypes.STRING

        }
})