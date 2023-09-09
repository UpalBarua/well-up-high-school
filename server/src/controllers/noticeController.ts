import { Request, Response } from "express";
import Notice from "../models/Notice";

// Create a new notice
export const createNotice = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      pdfLink,
      postedDate,
      expiryDate,
      author,
      tags,
      status,
      relatedLinks,
    } = req.body;

    if (
      !title ||
      !description ||
      !pdfLink ||
      !postedDate ||
      !expiryDate ||
      !author ||
      !tags ||
      !status ||
      !relatedLinks
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required notice fields." });
    }

    const notice = new Notice({
      title,
      description,
      pdfLink,
      postedDate,
      expiryDate,
      author,
      tags,
      status,
      relatedLinks,
    });

    const savedNotice = await notice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all notice
export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await Notice.find().sort({ postedDate: -1 });
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//Get a specific notice by ID
export const getNoticesById = async (req: Request, res: Response) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(200).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//Update Notice by ID
export const updateNotice = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      pdfLink,
      postedDate,
      expiryDate,
      author,
      tags,
      status,
      relatedLinks,
    } = req.body;

    if (
      !title ||
      !description ||
      !pdfLink ||
      !postedDate ||
      !expiryDate ||
      !author ||
      !tags ||
      !status ||
      !relatedLinks
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required notice fields." });
    }

    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        pdfLink,
        postedDate,
        expiryDate,
        author,
        tags,
        status,
        relatedLinks,
      },
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

//Delete a notice by ID
export const deleNotice = async (req: Request, res: Response) => {
  try {
    const deletedNotice = await Notice.findByIdAndDelete(req.params.id);

    if (!deletedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
