import { Router } from "express";
import {
  createStudent,
  getAllstudents,
} from "../controllers/studentController";

const router: Router = Router();
router.post("/students", createStudent);
router.get("/students", getAllstudents);

export default router;
