import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res, connection }) => {
    return { req, res, connection };
  },
});

export default server;
