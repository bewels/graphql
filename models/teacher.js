const Sequelize = require('sequelize');
const sequelize = require('./../utils/db');

const teacher = sequelize.define('Teacher', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	surname: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = teacher;
