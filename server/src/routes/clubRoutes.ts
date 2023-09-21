import { Router } from "express";
import { createClub, getClub } from "../controllers/clubController";

const router: Router = Router();

router.post("/", createClub);
router.get("/", getClub);

export default router;
