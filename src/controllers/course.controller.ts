import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import Course from "../models/courses.model";
import { createCoursechema, createCourseType } from "../schemas/course.schema";

export const createCourse = async (
  req: Request<{}, {}, createCourseType>,
  res: Response
) => {
  try {
    const { name, idCourse } = createCoursechema.parse(req.body);
    const id = uuidv4();
    const course = new Course({ name, id, idCourse });
    await course.save();
    res.status(200).json(course);
  } catch (errors) {
    res.status(500).json({ error: errors });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const studentDeleted = await Course.findOneAndDelete(id);
    if (!studentDeleted) return res.sendStatus(404);
    res.status(200).json(studentDeleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const renderCourse = async (
  req: Request<{}, {}, createCourseType>,
  res: Response
) => {
  try {
    const id = req.params.id;
    const course = await Course.findOne({ id });

    return res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findOneAndUpdate(id, req.body);
    return res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const renderCourses = async (
  req: Request<{}, {}, createCourseType>,
  res: Response
) => {
  try {
    const course = await Course.find();

    return res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
