import { Router } from "express";
import userRouter from "../app/modules/user/user.route.js"
import taskRoute from "../app/modules/tasks/tasks.route.js";


const router = Router();

router.use("/users", userRouter);
router.use("/task", taskRoute);


export default router;

