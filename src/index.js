import express, { urlencoded } from "express";
import { connectToMongoose } from "./db/db.connect";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));

connectToMongoose();

const port = process.env.port || 3000;

import { router as userRouter } from "./routers/user.routers";
import { router as AddressRouter } from "./routers/address.routers";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);
app.use("/address", AddressRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
