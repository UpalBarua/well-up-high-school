import { type Request, type Response } from 'express';
export declare const getAllTests: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
