import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
} from "../controllers/teacherController";

const router: Router = Router();

router.get("/", getAllTeachers);
router.get("/:id", getTeacherById);
router.post("/", createTeacher);
router.patch("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

export default router;
