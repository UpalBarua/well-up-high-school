import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
} from "../controllers/teacherController";

const router: Router = Router();

router.get("/teachers", getAllTeachers);
router.get("/teacher/:id", getTeacherById);
router.post("/teacherCreate", createTeacher);
router.patch("/teacherUpdate/:id", updateTeacher);
router.delete("/teacherDelete/:id", deleteTeacher);

export default router;
