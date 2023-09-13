import { Router } from 'express';
import {
  createStudent,
  deleteStudenyByID,
  getAllstudents,
  getStudentById,
  updateStudentById,
} from '../controllers/studentController';

const router: Router = Router();
router.post('/', createStudent);
router.get('/', getAllstudents);
router.get('/:id', getStudentById);
router.patch('/:id', updateStudentById);
router.delete('/:id', deleteStudenyByID);

export default router;
