import { Schema, model, type Document } from "mongoose";

type StudentInformation = Document & {
  firstName: string;
  lastName: string;
  studentId: number;
  bloodGroup: string;
  email: string;
  birthdate: Date;
  gender: "Male" | "Female" | "Other";
  address: string;
  phone: string;
  classInfo: {
    session: string;
    group: string;
    class: string;
    section: string;
  };
  registrationDate: Date;
  status: string;
};

const studentSchema = new Schema<StudentInformation>(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
    studentId: {
      type: Number,
      required: true,
      unique: true,
      maxlength: 6,
    },
    bloodGroup: {
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
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 11,
    },
    classInfo: {
      session: {
        type: String,
        required: true,
      },
      group: {
        type: String,
        required: true,
      },
      class: {
        type: String,
        required: true,
      },
      section: {
        type: String,
        required: true,
      },
    },
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
