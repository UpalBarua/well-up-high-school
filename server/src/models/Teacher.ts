import { Schema, model, type Document } from 'mongoose';

type TeacherDocument = Document & {
  fullName: string;
  email: string;
  gender: string;
  phone: string;
  subjects: string[];
  classesTaught: string[];
  yearsOfExperience: number;
  specializedRole: string;
  degrees: {
    degreeName: string;
    university: string;
    year: string;
  }[];
};

const teacherSchema = new Schema<TeacherDocument>({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subjects: [
    {
      className: {
        type: String,
        required: true,
      },
    },
  ],
  classesTaught: [
    {
      className: {
        type: String,
        required: true,
      },
    },
  ],
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  specializedRole: {
    type: String,
    required: true,
  },
  degrees: [
    {
      degreeName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
      },
      university: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    },
  ],
});

const TeacherModel = model<TeacherDocument>('Teacher', teacherSchema);

export default TeacherModel;
