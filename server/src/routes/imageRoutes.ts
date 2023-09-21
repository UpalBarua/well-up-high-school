import { Router } from "express";
import {
  createdImageDocument,
  getAllImages,
} from "../controllers/imageController";

const router: Router = Router();
router.post("/", createdImageDocument);
router.get("/", getAllImages);
export default router;
