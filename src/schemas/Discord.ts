import { Schema } from "mongoose";

export const DiscordModel = new Schema({
    token: {
        type: String,
        required: true,
    },
    banned: {
        type: Boolean,
        required: false,
        default: false,
    },
    creationTime: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    registeredIP: {
        type: String,
        required: false,
        default: null,
    },
    discordId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: null,
    },
    authorized: {
        type: Boolean,
        required: false,
        default: true,
    },
    verifiedGuilds: {
        type: Array,
        required: false,
        default: [],
    },
    fingerprints: {
        type: Array,
        required: false,
        default: [],
    },
});
