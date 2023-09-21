import { type Request, type Response } from 'express';
import { isValidObjectId } from 'mongoose';
import Teacher from '../models/Teacher';
import z from 'zod';

const teacherSchema = z.object({
  name: z.string().min(5).max(25),
  email: z.string().email(),
  gender: z.enum(['male', 'female', 'other']),
  phone: z.string().max(11),
  subjects: z.array(z.string()).min(1),
  classes: z.array(z.string()).min(1),
  experience: z.number().min(0).max(50),
  role: z.enum([
    'principal',
    'vice principal',
    'senior teacher',
    'assistant teacher',
    'guest teacher',
  ]),
  degrees: z
    .array(
      z.object({
        degreeName: z.string().min(5).max(25),
        university: z.string(),
        year: z.number(),
      })
    )
    .min(1),
});

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const foundTeachers = await Teacher.find({});

    if (foundTeachers) {
      return res.status(200).json({
        success: true,
        message: 'Teachers retrieved successfully',
        data: foundTeachers,
      });
    }

    res.status(404).json({
      success: false,
      message: 'No teachers found',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve teachers',
    });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid teacher id',
      });
    }

    const foundTeacher = await Teacher.findById(id);

    if (foundTeacher) {
      return res.status(200).json({
        success: true,
        message: 'Teacher retrieved successfully',
        data: foundTeacher,
      });
    }

    res.status(404).json({
      success: false,
      message: 'Specified teacher not found',
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: 'There was an error while fetching the teacher', err });
  }
};

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const validationResults = teacherSchema.safeParse(body);

    if (!validationResults.success) {
      return res.status(400).json({
        success: false,
        message: 'Body must be a valid.',
      });
    }

    const createdTeacher = await Teacher.create(validationResults.data);

    if (createdTeacher) {
      return res.status(200).json({
        success: true,
        message: 'Successfully created new teacher.',
        data: createdTeacher,
      });
    }

    res.status(400).json({
      success: false,
      message: 'Failed to create new teacher',
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'There was an error on Post Teacher', err });
  }
};

// delete teacher;
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (deletedTeacher) {
      return res.status(200).json({ message: 'Teacher deleted successfully' });
    }
    res.status(404).json({ error: 'Teacher was not Deleted ' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'There Was an error on Delete Teacher', err });
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
    const updatedTeacher = await Teacher.findByIdAndUpdate(
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

    res.status(404).json({ message: 'Teacher was not Updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
