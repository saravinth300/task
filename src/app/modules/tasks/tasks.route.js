import {Router} from "express";
import { createTask, getTasks, getTaskById, updateTask } from "./tasks.controller.js";
import validateResource from "../../../middleware/validateResource.js";
import {createTaskSchema} from "./tasks.schema.js";


const taskRouter = Router();

taskRouter.post("/", validateResource(createTaskSchema), createTask);

taskRouter.get("/", getTasks);

taskRouter.get("/:id", getTaskById);

taskRouter.put("/:id", updateTask);

export default taskRouter;
