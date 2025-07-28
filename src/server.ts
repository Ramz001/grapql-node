import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import fs from "fs";
import path from "path";
// @ts-ignore
import { ruruHTML } from "ruru/server";
// Construct a schema using GraphQL schema language
import { root } from "./root";
const schemaSDL = fs.readFileSync(path.join(__dirname, "root.gql"), "utf8");

export const schema = buildSchema(schemaSDL);
 
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
})