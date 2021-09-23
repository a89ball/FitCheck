const User = require('./user')
const WorkoutRoute = require ('./workout')

User.hasMany(Workout,{
    foreignKey: userId,
    onDelete: 'CASCADE',
})

module.exports = {User, Workout}