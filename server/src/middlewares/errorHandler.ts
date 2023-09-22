import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "An error occurred", message: err.message });
  }
  next();
};

export default errorHandler;
