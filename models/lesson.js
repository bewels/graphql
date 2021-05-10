const Sequelize = require('sequelize');
const sequelize = require('./../utils/db');

const lesson = sequelize.define('Lesson', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	t_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: 'Teachers',
			key: 'id',
		},
	},
});

module.exports = lesson;
