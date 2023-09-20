import { Request, Response } from "express";
import Image from "../models/Image";

export const createdImageDocument = async (req: Request, res: Response) => {
  try {
    const image = await Image.create(req.body);
    res.status(201).json({
      status: "Success",
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Crash",
    });
    console.log(error);
  }
};
export const getAllImages = async (req: Request, res: Response) => {
  try {
    const images = await Image.find({});
    res.status(201).json({
      status: "Success",
      data: images,
    });
  } catch (error) {}
};
