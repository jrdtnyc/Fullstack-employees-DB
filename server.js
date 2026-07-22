import express from "express";
import db from "#db/client";
import seedEmployees from "#db/seed";
import { router } from "./api/app.js";
const app = express();
app.use(express.json());
app.use("/api", router);

const init = async () => {
  console.log("connected to db");
  if (process.env.SYNC) await seed();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();
