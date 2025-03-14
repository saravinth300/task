import express from "express";
import { createTask, getTasks, getTaskById, updateTask } from "../controllers/taskController.js";
import validate from "../middlewares/validate.js";
import { createTaskSchema, updateTaskSchema } from "../validations/taskValidation.js";

const router = express.Router();

router.post("/task", validate(createTaskSchema), createTask);
router.get("/task", getTasks);
router.get("/task/:id", getTaskById);
router.put("/task/:id", validate(updateTaskSchema), updateTask);

export default router;
