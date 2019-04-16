const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const cors = require('cors');

const { gql } = require('apollo-server');

// const typeDefs = `
//   type Author {
//     id: Int!
//     firstName: String
//     lastName: String
//     """
//     the list of Posts by this author
//     """
//     posts: [Post]
//   }
//
//   type Post {
//     id: Int!
//     title: String
//     author: Author
//     votes: Int
//   }
//
//   # the schema allows the following query:
//   type Query {
//     posts: [Post]
//     author(id: Int!): Author
//   }
//
//   # this schema allows the following mutation:
//   type Mutation {
//     upvotePost (
//       postId: Int!
//     ): Post
//   }
// `;

// Read schema file from file
const fs = require('fs');
const mySchema = fs.readFileSync('schema_2.graphql').toString('utf8');
const typeDefs = gql`${mySchema}`;

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
});

// Initialize the app
const app = express();

// https://www.prisma.io/blog/enabling-cors-for-express-graphql-apollo-server-1ef999bfb38d
app.use(cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(80, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
