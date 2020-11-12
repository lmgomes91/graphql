import "reflect-metadata";
import "./database";
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import { resolvers } from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: path.resolve("src/graphql/schema/schema.graphql"),
  resolvers,
});

console.log("Server starts at http://localhost:4000/");

server.start();
