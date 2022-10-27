import { Sequelize } from "sequelize";

const sequelize = new Sequelize("apirest", "julian", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
