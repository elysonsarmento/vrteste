import { Router, Request, Response } from "express";
import { createCourse, deleteCourse, renderCourse, renderCourses, updateCourse } from "../controllers/course.controller";

const routerCourses = Router();

routerCourses.post("/create", createCourse);

routerCourses.get("/list", renderCourses);

routerCourses.get("/:id", renderCourse);

routerCourses.patch("/edit/:id", updateCourse);

routerCourses.delete("/delete/:id", deleteCourse);

export default routerCourses;
