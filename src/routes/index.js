import { Router } from "express";
import userrouter from "../app/modules/user/user.routes.js";
import taskrouter from "../app/modules/tasks/tasks.route.js";




const router = Router();
router.use("/users", userrouter);
router.use("/tasks", taskrouter)

export default router;






