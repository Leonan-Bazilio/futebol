import { findAllClubs } from "../repositories/clubs-repository";
import { noContent, ok } from "../utils/http-helper";

export const getAllClubsService = async () => {
  const data = await findAllClubs();

  if (!data) {
    return await noContent();
  } else {
    return await ok(data);
  }
};
