require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

// const typeDefs = `
//     type Query{
//         hello: String!
//     }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hi"
//   }
// };

// const server = new GraphQLServer({ typeDefs, resolvers });
const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`>>> Server running on http://localhost:${PORT}`)
);
