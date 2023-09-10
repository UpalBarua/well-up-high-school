import { Request, Response } from "express";
import Student from "../models/Student";

// create a new student document
export const createStudent = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      birthdate,
      gender,
      address,
      phone,
      desiredCourses,
      registrationDate,
      status,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !birthdate ||
      !gender ||
      !address ||
      !phone ||
      !desiredCourses ||
      !registrationDate ||
      !status
    ) {
      return res.status(400).json({
        message:
          "Please provide all required Data. After than your data will be definitely inserted",
      });
    }

    const student = new Student({
      firstName,
      lastName,
      email,
      birthdate,
      gender,
      address,
      phone,
      desiredCourses,
      registrationDate,
      status,
    });
    const studentResult = await student.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted Successfully",
      data: studentResult,
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
    res.status(400).json({
      status: "failed",
      message: "can't get data",
    });
  }
};
