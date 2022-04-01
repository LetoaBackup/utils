import { Schema } from "mongoose";

export const BanSchema = new Schema({
    guildID: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: false,
        default: null,
    },
    bannedAt: {
        type: Number,
        required: false,
        default: Date.now(),
    },
});

export default BanSchema;
