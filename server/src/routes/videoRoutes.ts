import { Router } from "express";
import {
  createVideoDocument,
  getAllVideos,
} from "../controllers/videoController";

const router: Router = Router();
router.post("/", createVideoDocument);
router.get("/", getAllVideos);
export default router;
