import { Schema } from "mongoose";

export const Blacklists = new Schema({
    blacklisted: {
        type: Boolean,
        required: false,
        default: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: false,
        default: Date.now(),
    },
});

export default Blacklists;
