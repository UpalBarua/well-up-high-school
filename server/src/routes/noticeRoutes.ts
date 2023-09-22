import { Router } from "express";
import {
  createNotice,
  deleteNotice,
  getNotices,
  getNoticesById,
  updateNotice,
} from "../controllers/noticeController";

const router: Router = Router();

router.post("/", createNotice);
router.get("/", getNotices);
router.get("/:id", getNoticesById);
router.put("/:id", updateNotice);
router.delete("/:id", deleteNotice);

export default router;
