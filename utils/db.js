const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'Ilyamashina', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;
