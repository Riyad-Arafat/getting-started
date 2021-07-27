import { ExpressContext } from "apollo-server-express";
import { countries } from "./contries";

interface ContextProps extends ExpressContext {}

// // // // // // // Resolvers
export const resolvers = {
  Query: {
    async countries(
      _parent: any,
      _args: any,
      context: ContextProps,
      _info: any
    ) {
      return countries;
    },
  },
};
