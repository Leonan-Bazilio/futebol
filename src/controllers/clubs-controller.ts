import { Request, Response } from "express";
import { getAllClubsService } from "../services/clubs-service";

export const getAllClubsController = async (req: Request, res: Response) => {
  const { statusCode, body } = await getAllClubsService();
  res.status(statusCode).json(body);
};
