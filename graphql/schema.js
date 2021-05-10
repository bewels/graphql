const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Lessons {
        id: ID!
        name: String!
        createdAt: String
        updatedAt: String
        t_id: ID!
    }
    type Teachers {
        id: ID!
        surname: String!
        createdAt: String
        updatedAt: String
    }

    input LessonInput {
        name: String!
        t_id: ID!
    }

    type Query {
        getLessons : [Lessons!]!
        getTeachers: [Teachers!]!
        getLesson (id: ID!) : Lessons!
        getTeacher (id: ID!) : Teachers!
    }

    type Mutation {
        createTeacher(surname: String!) : Teachers!
        createLesson(data: LessonInput!) : Lessons!
    }
`);

module.exports = schema;
