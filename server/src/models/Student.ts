import { Schema, model } from "mongoose";

interface StudentInformation extends Document {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: Date;
  gender: "Male" | "Female" | "Other";
  address: string;
  phone: string;
  desiredCourses: {
    courseName: string;
    instructor?: string;
  }[];
  registrationDate: Date;
  status: "Pending" | "Approved" | "Rejected";
}

const studentSchema = new Schema<StudentInformation>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    desiredCourses: [
      {
        courseName: {
          type: String,
          required: true,
        },
        instructor: String,
      },
    ],
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Student = model<StudentInformation>("student", studentSchema);
export default Student;
