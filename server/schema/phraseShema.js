import mongoose from "mongoose";
export const phraseSchema = new mongoose.Schema({
    phrase: {
        type: String,
        required: true
    }
});
