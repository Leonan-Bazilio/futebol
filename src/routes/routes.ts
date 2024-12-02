import { Router } from "express";
import {
  createPlayerController,
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  updatePlayerController,
} from "../controllers/players-controller";
import { getAllClubsController } from "../controllers/clubs-controller";

const router = Router();

router.get("/players", getAllPlayersController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", createPlayerController);
router.delete("/players/:id", deletePlayerController);
router.patch("/players/:id", updatePlayerController);

router.get("/clubs", getAllClubsController);
export default router;
