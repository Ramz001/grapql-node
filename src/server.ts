import express from "express";
// @ts-ignore
import { ruruHTML } from "ruru/server";
import { createHandler } from "graphql-http/lib/use/express";
import path from "path";
import { root } from "./root";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync(path.join(__dirname, "**/*.graphql"));
console.log(typeDefs);
export const schema = makeExecutableSchema({
  typeDefs,
});

const app = express();

// Create and use the GraphQL handler
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port 4000
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
