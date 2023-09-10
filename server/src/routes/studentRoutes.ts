import { Router } from "express";
import {
  createStudent,
  deleteStudenyByID,
  getAllstudents,
  getStudentById,
  updateStudentById,
} from "../controllers/studentController";

const router: Router = Router();
router.post("/students", createStudent);
router.get("/students", getAllstudents);
router.get("/student/:id", getStudentById);
router.patch("/student/:id", updateStudentById);
router.delete("/student/:id", deleteStudenyByID);

export default router;
