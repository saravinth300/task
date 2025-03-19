import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
  updateUserById,
} from "./user.controller.js";
import validateResource from "../../../middleware/validateResource.js"
import createUserSchema from "./user.schema.js";

const userRouter = Router();

userRouter.post("/", validateResource(createUserSchema), createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUserById);

export default userRouter;
