import express from "express";
import morgan from "morgan";
import { MONGODB_URI, PORT } from "./config";
import routerCourses from "./routes/courses.routes";
var ip = require("ip");

// Routes
import studentsRoutes from "./routes/students.routes";

export class Applicaction {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/students", studentsRoutes);
    this.app.use("/courses", routerCourses);
  }

  start(): void {
    this.app.listen(PORT, () => {
      console.log("Server is running at", ip.address() ,PORT);
    });
  }
}
