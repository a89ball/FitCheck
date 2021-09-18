const User = require('./user')
const Workout = require ('./workout')

User.hasMany(Workout,{
    foreignKey: userId,
    onDelete: 'CASCADE',
})

module.exports = {User, Workout}