import { Request, Response } from "express";
import Student from "../models/student.model";
import { v4 as uuidv4 } from "uuid";
import {
  createStudentchema,
  createStudentType,
} from "../schemas/student.schema";

export const createStudent = async (
  req: Request<{}, {}, createStudentType>,
  res: Response
) => {
  try {
    const { name, idCourse } = createStudentchema.parse(req.body);
    const id = uuidv4();
    const student = new Student({ name, id, idCourse });
    await student.save();
    res.status(200).json(student);
  } catch (errors) {
    res.status(500).json({ error: errors });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const studentDeleted = await Student.findOneAndDelete(id);
    if (!studentDeleted) return res.sendStatus(404);
    res.status(200).json(studentDeleted) ;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const renderStudent = async (
  req: Request<{}, {}, createStudentType>,
  res: Response
) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ id });

    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOneAndUpdate(id, req.body);
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const renderStudents = async (
  req: Request<{}, {}, createStudentType>,
  res: Response
) => {
  try {
    const student = await Student.find();

    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
