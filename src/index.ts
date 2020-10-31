require("dotenv-safe").config();

import Koa from "koa";
import Router from "koa-router";
import { Database } from "./database";

const PORT = process.env.PORT;

const server = async () => {
  const result = await Database.connect();
  if (result.err) process.exit(1);

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    ctx.body = "Hello World.";
  });

  app.use(router.routes());

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
