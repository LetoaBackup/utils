"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordModel = void 0;
const mongoose_1 = require("mongoose");
exports.DiscordModel = new mongoose_1.Schema({
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
//# sourceMappingURL=Discord.js.map