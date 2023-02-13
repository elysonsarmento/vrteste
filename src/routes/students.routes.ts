import { Router, Request, Response } from "express";
import {
  createStudent,
  deleteStudent,
  renderStudent,
  renderStudents,
  updateStudent,
} from "../controllers/student.controller";

const routerStudent = Router();

routerStudent.post("/create", createStudent);

routerStudent.get("/list", renderStudents);

routerStudent.get("/:id", renderStudent);

routerStudent.patch("/edit/:id", updateStudent);

routerStudent.delete("/delete/:id", deleteStudent);

export default routerStudent;
