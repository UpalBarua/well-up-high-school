import { Request, Response } from "express";
import { z } from "zod";
import NoticeModel from "../models/Notice";

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

export const createNotice = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const validationResults = noticeSchema.safeParse(body);

    if (!validationResults.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid notice data',
        error: validationResults.error,
      });
    }

    const parsedNotice = validationResults.data;
    const postedDate = new Date(parsedNotice.postedDate);
    const expiryDate = new Date(parsedNotice.expiryDate);

    const noticeData = { ...parsedNotice, postedDate, expiryDate };

    const savedNotice = await NoticeModel.create(noticeData);

    if (savedNotice) {
      return res.status(201).json({
        success: true,
        message: 'Successfully created new notice',
        data: savedNotice,
      });
    }

    res.status(400).json({
      success: false,
      message: 'Failed to create new notice',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await NoticeModel.find().sort({ postedDate: -1 });

    if (notices.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Notices retrieved successfully',
        data: notices,
      });
    }

    res.status(404).json({
      success: false,
      message: 'No notices found',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const getNoticesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const foundNotice = await NoticeModel.findById(id);

    if (foundNotice) {
      return res.status(200).json({
        success: true,
        message: 'Notice retrieved successfully',
        data: foundNotice,
      });
    }

    res.status(404).json({
      success: false,
      message: 'Specified notice not found',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const updateNotice = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const validationResults = noticeSchema.safeParse(body);

    if (!validationResults.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid notice data',
        error: validationResults.error,
      });
    }

    const parsedNotice = validationResults.data;
    const postedDate = new Date(parsedNotice.postedDate);
    const expiryDate = new Date(parsedNotice.expiryDate);

    const noticeData = { ...parsedNotice, postedDate, expiryDate };

    const updatedNotice = await NoticeModel.findByIdAndUpdate(
      id,
      noticeData,
      { new: true }
    );

    if (updatedNotice) {
      return res.status(200).json({
        success: true,
        message: 'Notice updated successfully',
        data: updatedNotice,
      });
    }

    res.status(404).json({
      success: false,
      message: 'Notice not found',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const deleteNotice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedNotice = await NoticeModel.findByIdAndDelete(id);

    if (deletedNotice) {
      return res.status(200).json({
        success: true,
        message: 'Notice deleted successfully',
      });
    }

    res.status(404).json({
      success: false,
      message: 'Notice not found',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
