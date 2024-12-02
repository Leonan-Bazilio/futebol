import express, { json, Request, Response } from "express";
import router from "./routes/routes";

function creteApp() {
  const app = express();
  app.use(express.json());
  app.use("/api", router);

  return app;
}
export default creteApp;
