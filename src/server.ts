import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolvers.ts"));

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  httpServer.listen({ port: 4000 }, () => {
    console.log("API Endpoint: http://localhost:4000/graphql");
  });
};

startServer();
