import { Router } from 'express';
import { getAllTests } from '../controllers/testController';

const router: Router = Router();

router.get('/', getAllTests);

export default router;
