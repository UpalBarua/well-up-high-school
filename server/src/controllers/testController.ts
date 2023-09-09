import { type Request, type Response } from 'express';
import Test from '../models/Test';

export const getAllTests = async (req: Request, res: Response) => {
  try {
    const foundTest = await Test.find({});

    if (foundTest) {
      return res.status(200).json(foundTest);
    }

    res.status(404).json({ message: 'Test not found' });
  } catch (error) {
    res.status(500).json(error);
  }
};
