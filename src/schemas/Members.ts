import mongoose from "mongoose";

export const Members = new mongoose.Schema({
    discordId: {
        type: String,
        required: true,
    },
    guild: {
        type: String,
        required: true,
    },
    discordTag: {
        type: String,
        required: false,
        default: null,
    },
    avatar: {
        type: String,
        required: false,
        default: null,
    },
    accessToken: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

export default Members;
