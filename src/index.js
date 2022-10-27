import express from "express";
import appRoutes from "./routes/index.js";
import db from "../db/index.js";
import "./models/Project.js";
import "./models/Task.js";
const port = 3000;
const app = express();

// Config Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", appRoutes);

// Server Up

async function serverUp() {
  try {
    await db.sync({ force: false }).then(() => {
      console.log("db connected");
      app.listen(port, () => {
        console.log(`server is running on port ${port}`);
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database");
  }
}

serverUp();
