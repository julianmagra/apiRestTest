import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} from "../controllers/projects.js";
const router = Router();

router.get("/", getProjects);
router.get("/:projectId", getProject);
router.post("/", createProject);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);
router.get("/:projectId/tasks", getProjectTasks);
export default router;
