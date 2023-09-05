import express from "express";
import { addAddress } from "../controllers/address.controller";

const router = express.Router();

router.route("/").post(addAddress);

export { router };
