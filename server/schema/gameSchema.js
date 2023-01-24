import mongoose from "mongoose";
const Schema  = mongoose.Schema;

export const GameShema = new Schema({
    title: String,
    type: String,
    created_at: Date,
    updated_at: Date
}) 
