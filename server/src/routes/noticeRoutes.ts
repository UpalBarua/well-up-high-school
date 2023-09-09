import { Router } from "express";
import { createNotice, deleNotice, getNotices, getNoticesById, updateNotice } from "../controllers/noticeController";

const router: Router = Router();

router.post("/notices", createNotice);
router.get("/notices", getNotices);
router.get("/notices/:id", getNoticesById);
router.put("/notices/:id", updateNotice);
router.delete("/notices/:id", deleNotice);


export default router;