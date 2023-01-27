import mongoose from "mongoose";
import { userSchema } from "../schema/userSchema.js";

export const userModel = mongoose.model('User', userSchema);