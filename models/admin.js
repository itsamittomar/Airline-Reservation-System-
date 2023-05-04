const Sequelize = require('sequelize');

const sequelize = new Sequelize('airlines', 'postgres', '12345678', {
    host: '127.0.0.1',
    dialect: 'postgres',
});

const Admin = sequelize.define('admin', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
