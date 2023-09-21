import { Schema, model, type Document } from 'mongoose';

type TeacherDocument = Document & {
  name: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  experience: number;
  role: string;
  degrees: {
    degreeName: string;
    university: string;
    year: string;
  }[];
};

const teacherSchema = new Schema<TeacherDocument>({
  name: {
    type: String,
    required: true,
    minlength: [5, 'Name must be at least 5 characters.'],
    maxlength: [25, 'Name cannot exceed 25 characters.'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      (value: string) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      'Email must be a valid email address',
    ],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 11,
    unique: true,
  },
  subjects: {
    type: [String],
    required: true,
    minlength: [1, 'Subjects must contain at least 1 subject.'],
  },
  classes: {
    type: [String],
    required: true,
    minlength: [1, 'Classes must contain at least 1 class.'],
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
  role: {
    type: String,
    enum: [
      'principal',
      'vice principal',
      'senior teacher',
      'assistant teacher',
      'guest teacher',
    ],
    required: true,
    default: 'guest teacher',
  },
  degrees: [
    {
      degreeName: {
        type: String,
        required: true,
        minlength: [5, 'degreeName must be at least 5 characters.'],
        maxlength: [25, 'degreeName cannot exceed 25 characters.'],
      },
      university: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
  ],
});

const TeacherModel = model<TeacherDocument>('Teacher', teacherSchema);

export default TeacherModel;
