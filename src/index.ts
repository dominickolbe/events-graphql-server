require("dotenv-safe").config();

import Koa from "koa";
import koaGraphql from "koa-graphql";
import koaMount from "koa-mount";
import { Database } from "./database";
import { UserModel } from "./database/model/User";
import { resolver, schema } from "./graphql";

const PORT = process.env.PORT;

const server = async () => {
  const result = await Database.connect();
  if (result.err) process.exit(1);

  const app = new Koa();

  app.use(
    koaMount(
      "/graphql",
      koaGraphql({
        schema: schema,
        rootValue: resolver,
        graphiql: true,
      })
    )
  );

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
