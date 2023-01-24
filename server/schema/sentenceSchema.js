import mongoose from "mongoose";
const Schema  = mongoose.Schema;

export const sentenceSchema = new Schema({
    modalities: Array,
    game: {type: Schema.Types.ObjectId,ref:'games'}
})