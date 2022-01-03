import { Schema } from "mongoose";

export const OptSchema = new Schema({
    discordId: {
        type: String,
        required: true,
    },
    createdTimestamp: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    reason: {
        type: String,
        required: false,
        default: null,
    },
});
