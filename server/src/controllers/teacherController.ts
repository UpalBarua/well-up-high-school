import { type Request, type Response } from "express";
import TeacherModel from "../models/Teacher";

//get all teachers data
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await TeacherModel.find();

    if (teachers) {
      return res.status(200).json(teachers);
    }

    res.status(404).json({ message: "Teachers not found on getallTeachers" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "There was an error while fetching the teachers", err });
  }
};

//get a single teacher
export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const teacher = await TeacherModel.findById(req.params.id);

    if (teacher) {
      return res.status(200).json(teacher);
    }

    res.status(404).json({ error: "Teacher not found on Single Teacher" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "There was an error while fetching the teacher", err });
  }
};

//post a teacher data
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const newTeacher = new TeacherModel(req.body);
    const TeacherSave = await newTeacher.save();
    res.status(200).json(TeacherSave);
  } catch (err) {
    res
      .status(500)
      .json({ message: "There Was an error on Post Teacher", err });
  }
};

// delete teacher;
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const deletedTeacher = await TeacherModel.findByIdAndDelete(req.params.id);
    if (deletedTeacher) {
      return res.status(200).json({ message: "Teacher deleted successfully" });
    }
    res.status(404).json({ error: "Teacher was not Deleted " });
  } catch (err) {
    res
      .status(500)
      .json({ message: "There Was an error on Delete Teacher", err });
  }
};

//Update A Teacher Information
export const updateTeacher = async (req: Request, res: Response) => {
  const {
    fullName,
    email,
    gender,
    phone,
    subjects,
    classesTaught,
    yearsOfExperience,
    specializedRole,
  } = req.body;

  try {
    const updatedTeacher = await TeacherModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullName,
          email,
          gender,
          phone,
          subjects,
          classesTaught,
          yearsOfExperience,
          specializedRole,
        },
      },
      { new: true }
    );

    if (updatedTeacher) {
      return res.status(200).json(updatedTeacher);
    }

    res.status(404).json({ message: "Teacher was not Updated" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
