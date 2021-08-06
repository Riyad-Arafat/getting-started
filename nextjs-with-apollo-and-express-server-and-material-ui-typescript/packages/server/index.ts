import express from "express";
import nextApp from "../client";
import apolloServer from "../graphql";

const port = parseInt(process.env.PORT || "5555", 10);
const dev = process.env.NODE_ENV !== "production";

async function main() {
  const app = express();

  await bootstrapApolloServer(app);
  await bootstrapClientApp(app);

  app.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
}

async function bootstrapClientApp(expressApp: any) {
  await nextApp.prepare();
  expressApp.get("*", (req: any, res: any) => {
    const handle = nextApp.getRequestHandler();
    return handle(req, res);
  });
}

async function bootstrapApolloServer(expressApp: any) {
  apolloServer.applyMiddleware({ app: expressApp, path: "/graphql" });
}

main();
