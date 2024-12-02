import { badRequest, created, noContent, ok } from "../utils/http-helper";
import {
  deletePlayerByIdRepository,
  findAllPlayers,
  findPlayerByIdRepository,
  insertPlayerRepository,
  updatePlayerRepository,
} from "../repositories/players-repository";
import PlayerModel from "../models/player-model";
import StatisticsModel from "../models/statistics-model";
export const getAllPlayersService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return await noContent();
  } else {
    return await ok(data);
  }
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerByIdRepository(id);

  if (!data) {
    return await noContent();
  } else {
    return await ok(data);
  }
};

export const createPlayerService = async (player: PlayerModel) => {
  if (Object.keys(player).length !== 0) {
    await insertPlayerRepository(player);
    return await created();
  } else {
    return await badRequest();
  }
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deletePlayerByIdRepository(id);

  if (isDeleted) {
    response = await ok({ message: "deleted" });
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await updatePlayerRepository(id, statistics);

  if (Object.keys(data).length === 0) {
    return await badRequest();
  } else {
    return await ok(data);
  }
};
