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
const mySchema = fs.readFileSync('schema_2.js').toString('utf8');

console.log(mySchema);
return;
