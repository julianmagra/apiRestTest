import Project from "../models/Project.js";
import Tasks from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project)
      return res.status(404).json({ message: "Project doesn't exist" });

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { name, priority, description } = req.body;
    const project = await Project.findByPk(projectId);

    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    await Project.destroy({
      where: {
        id: projectId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { projectId } = req.params;

    const projectTasks = await Tasks.findAll({
      where: { projectId: projectId },
    });
    res.json(projectTasks);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};
