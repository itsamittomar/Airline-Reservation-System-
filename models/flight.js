const Sequelize = require('sequelize');
const seatObj = require('seat')

const sequelize = new Sequelize('airlines', 'postgres', '12345678', {
    host: '127.0.0.1',
    dialect: 'postgres',
});

const flight = sequelize.define('flight', {
    flightName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flightId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Route: {
        type: Sequelize.JSON,
        allowNull: false,
        unique: true,

    },
    availableSeats:{
        type : Sequelize.ARRAY,
        allowNull:false

    }

});
