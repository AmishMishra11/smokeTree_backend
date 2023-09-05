import express from "express";
import { userSignup } from "../controllers/user.controller";

const router = express.Router();

router.route("/").post(userSignup);

export { router };
