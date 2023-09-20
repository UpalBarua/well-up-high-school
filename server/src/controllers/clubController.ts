import { Request, Response } from "express";
import clubModal from "../models/Club";

export const createClub = async (req: Request, res: Response) => {
  try {
    const clubData = req.body;
    const clubSave = await clubModal.create(clubData);
    res.status(200).json(clubSave);
  } catch (err) {
    res
      .status(500)
      .json({ error: "There was an error while fetching the teachers", err });
  }
};
export const getClub = async (req: Request, res: Response) => {
  try {
    const club = await clubModal.find();
    if (club) {
      return res.status(200).json(club);
    }
    res.status(404).json({ message: "club not found on getClubs" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "There was an error while fetching the teachers", err });
  }
};
