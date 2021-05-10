const Teacher = require('./../models/teacher');
const Lessons = require('./../models/lesson');

module.exports = {
	createTeacher: async ({ surname }) => {
		try {
			const teacher = await Teacher.create({ surname });
			return teacher;
		} catch (e) {
			throw new Error(e);
		}
	},
	createLesson: async ({ data }) => {
		try {
			const { name, t_id } = data;
			const lesson = await Lessons.create({ name, t_id });
			return lesson;
		} catch (e) {
			throw new Error(e);
		}
	},

	getLessons: async () => {
		try {
			const lessons = await Lessons.findAll();
			return lessons;
		} catch (e) {
			throw new Error(e);
		}
	},

	getTeachers: async () => {
		try {
			const teachers = await Teacher.findAll();
			return teachers;
		} catch (e) {
			throw new Error(e);
		}
	},

	getTeacher: async ({ id }) => {
		try {
			const teacher = await Teacher.findByPk(id);
			return teacher;
		} catch (e) {
			throw new Error(e);
		}
	},
	getLesson: async ({ id }) => {
		try {
			const lesson = await Lessons.findByPk(id);
			return lesson;
		} catch (e) {
			throw new Error(e);
		}
	},
};
