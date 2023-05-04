const Sequelize = require('sequelize');

const sequelize = new Sequelize('airlines', 'postgres', '12345678', {
    host: '127.0.0.1',
    dialect: 'postgres',
});

const seat = sequelize.define('seat', {
    SeatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true
    },
    SeatType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    seatStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        enumerable :('AVILABLE' ,"UN-AVILABLE")
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
