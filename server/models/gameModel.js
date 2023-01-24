import mongoose from "mongoose";
import { GameShema } from "../schema/gameSchema.js";

export const gameModel = mongoose.model('Games', GameShema);