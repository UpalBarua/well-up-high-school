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
router.post("/create", createTeacher);
router.patch("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);

export default router;
