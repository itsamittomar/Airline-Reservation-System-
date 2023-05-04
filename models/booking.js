const Sequelize = require('sequelize');

const sequelize = new Sequelize('airlines', 'postgres', '12345678', {
    host: '127.0.0.1',
    dialect: 'postgres',
});

const Booking = sequelize.define('booking', {
    CustomerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    fare: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seatId:{
        type : Sequelize.INTEGER,
        allowNull: false
    }
});
