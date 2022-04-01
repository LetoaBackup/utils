import { Schema } from "mongoose";

export const InstantSchema = new Schema({
    accessToken: {
        type: String,
        required: false,
        default: null,
    },
    refreshToken: {
        type: String,
        required: false,
        default: null,
    },
    accountID: {
        type: String,
        required: false,
        default: null,
    },
    discordId: {
        type: String,
        required: false,
        default: null,
    },
    discordTag: {
        type: String,
        required: false,
        default: null,
    },
});

export default InstantSchema;
