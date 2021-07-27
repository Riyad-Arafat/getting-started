import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Country {
    code: String
    name: String
    native: String
    phone: String
    capital: String
    currency: String
    languages: [Language]
  }

  type Language {
    code: String
    name: String
  }

  type Query {
    countries: [Country]
  }
`;
