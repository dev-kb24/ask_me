import mongoose from "mongoose";
import { phraseSchema } from "../schema/phraseShema.js";

export const phraseModel = mongoose.model('Phrase', phraseSchema);