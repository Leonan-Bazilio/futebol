import { Request, Response } from "express";
import {
  createPlayerService,
  deletePlayerService,
  getAllPlayersService,
  getPlayerByIdService,
  updatePlayerService,
} from "../services/players-service";
import StatisticsModel from "../models/statistics-model";

export const getAllPlayersController = async (req: Request, res: Response) => {
  const { statusCode, body } = await getAllPlayersService();

  res.status(statusCode).json(body);
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { statusCode, body } = await getPlayerByIdService(id);

  res.status(statusCode).json(body);
};

export const createPlayerController = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const { statusCode, body } = await createPlayerService(bodyValue);

  res.status(statusCode).json(body);
};

export const deletePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { statusCode, body } = await deletePlayerService(id);

  res.status(statusCode).json(body);
};

export const updatePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;
  const { statusCode, body } = await updatePlayerService(id, bodyValue);
  res.status(statusCode).json(body);
};
