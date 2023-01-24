import mongoose from "mongoose";
import { sentenceSchema } from "../schema/sentenceSchema.js";

export const sentenceModel = mongoose.model('Sentences', sentenceSchema);