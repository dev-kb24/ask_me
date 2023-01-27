import mongoose from "mongoose";
const Schema  = mongoose.Schema;

export const userSchema = new Schema({
    email: String,
    password: String
})