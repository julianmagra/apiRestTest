import Tasks from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Tasks.findOne({
      where: { id: taskId },
      // attributes: ["name"],
    });

    res.json(task);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = Tasks.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { done, name } = req.body;
    const Task = await Tasks.findByPk(taskId);
    console.log({ done, name }, { taskId }, { Task });
    // Task.name = name;
    // Task.done = done;
    Task.set(req.body);
    await Task.save();

    res.json(Task);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }

  res.send("Updating Tasks");
};
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const deletedTask = await Tasks.destroy({
      where: { id: taskId },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
