import { Request, Response } from "express";
import Video from "../models/Video";

export const createVideoDocument = async (req: Request, res: Response) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json({
      status: "Success",
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Crash",
    });
    console.log(error);
  }
};
export const getAllVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find({});
    res.status(201).json({
      status: "Success",
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
