const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const sequelize = require('./utils/db');
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(
	'/graphql',
	graphqlHTTP({
		rootValue: require('./graphql/resolver'),
		schema: require('./graphql/schema'),
		graphiql: true,
	})
);

const start = async () => {
	try {
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(`server started on ${PORT} port`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
