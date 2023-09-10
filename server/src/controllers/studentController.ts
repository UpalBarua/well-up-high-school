import { Request, Response } from "express";
import Student from "../models/Student";
// create a new student document
export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Data inserted Successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server crash" });
  }
};

// get all studentts data

export const getAllstudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find({});
    res.status(201).json({
      status: "success",
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "can't get data",
    });
  }
};
// get single studnet data by id

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student) {
      return res.status(200).json({
        status: "success",
        data: student,
      });
    }
    res.status(400).json({
      message: "provide valid student id",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};
// delete specific student document by id

export const deleteStudenyByID = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (student) {
      return res.status(200).json({
        status: "success",
        data: student,
      });
    }
    res.status(400).json({
      message: "provide valid student id",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};

// UpdateStudentData using by Id

export const updateStudentById = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    studentId,
    birthdate,
    gender,
    address,
    phone,
    classInfo,
  } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName,
          lastName,
          email,
          studentId,
          birthdate,
          gender,
          address,
          phone,
          classInfo,
        },
      },
      { new: true }
    );
    if (student) {
      return res.status(200).json({
        status: "success",
        data: student,
      });
    }
    res.status(400).json({
      message: "student data not updated!!!",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};
