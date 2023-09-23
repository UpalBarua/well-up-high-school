import { Request, Response } from "express";
import { z } from "zod";
import NoticeModel from "../models/Notice";
import { isValidObjectId } from "mongoose";

const noticeSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(10).max(2000),
  pdfLink: z.string().url(),
  postedDate: z.string(),
  expiryDate: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  status: z.enum(["Draft", "Published", "Archived"]),
  relatedLinks: z.array(
    z.object({
      title: z.string(),
      url: z.string().url(),
    })
  ),
});

//post notice
export const createNotice = async (req: Request, res: Response) => {
  try {
    const parsedNotice = noticeSchema.safeParse(req.body);

    if (!parsedNotice.success) {
      return res.status(400).json({
        message: "Invalid notice data",
        errors: {
          formErrors: [],
          fieldErrors: parsedNotice.error.flatten(),
        },
      });
    }

    const postedDate = new Date(parsedNotice.data.postedDate);
    const expiryDate = new Date(parsedNotice.data.expiryDate);

    const noticeData = { ...parsedNotice.data, postedDate, expiryDate };

    const savedNotice = await NoticeModel.create(noticeData);
    res.status(201).json(savedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//get notices
export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await NoticeModel.find().sort({ postedDate: -1 });
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//get notice by id
export const getNoticesById = async (req: Request, res: Response) => {
  try {


      if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: "Invalid ObjectId" });
      }

    const notice = await NoticeModel.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(200).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//update notice
export const updateNotice = async (req: Request, res: Response) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    const parsedNotice = noticeSchema.safeParse(req.body);

    if (!parsedNotice.success) {
      return res
        .status(400)
        .json({ message: "Invalid notice data", errors: parsedNotice.error });
    }

    const postedDate = new Date(parsedNotice.data.postedDate);
    const expiryDate = new Date(parsedNotice.data.expiryDate);

    const noticeData = { ...parsedNotice.data, postedDate, expiryDate };

    const updatedNotice = await NoticeModel.findByIdAndUpdate(
      req.params.id,
      noticeData,
      { new: true }
    );

    if (!updatedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(200).json(updatedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//delete notice
export const deleteNotice = async (req: Request, res: Response) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }
    const deletedNotice = await NoticeModel.findByIdAndDelete(req.params.id);

    if (!deletedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};