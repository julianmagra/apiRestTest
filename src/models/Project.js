import { DataTypes } from "sequelize";
import db from "../../db/index.js";

import Task from "./Task.js";

const Project = db.define("projects", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  priority: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});

export default Project;

/* 
class Project extends Model {}

Project.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: {type: DataTypes.STRING},
  priority: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
});
 */
