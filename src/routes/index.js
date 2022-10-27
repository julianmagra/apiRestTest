import { Router } from "express";
import projectsRoutes from "./projects.js";
import tasksRoutes from "./tasks.js";

const router = Router();

router.use("/projects", projectsRoutes);
router.use("/tasks", tasksRoutes);

export default router;
