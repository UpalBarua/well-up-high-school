import { Schema, model, Document } from "mongoose";

type Teacher = Document & {
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

const teacherSchema = new Schema<Teacher>({
  fullName: {
    type: String,
    required: true,
    minlength:5,
    maxlength:40,
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
  subjects: [String],
  classesTaught: [String],
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
        minlength:3,
        maxlength:60,

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

const TeacherModel = model<Teacher>("Teacher", teacherSchema);

export default TeacherModel;
