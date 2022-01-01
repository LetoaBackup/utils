"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LoginSchema = new mongoose_1.Schema({
    discordId: {
        type: String,
        required: false,
        default: null,
    },
    accountID: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    banned: {
        type: Boolean,
        required: false,
        default: false,
    },
    premiumLevel: {
        type: Number,
        required: false,
        default: 0,
    },
    premiumExpire: {
        type: Number,
        required: false,
        default: null,
    },
    token: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    previousLinkedAccounts: {
        type: Array,
        required: false,
        default: [],
    },
    suspensionExpires: {
        type: Number,
        required: false,
        default: null,
    },
});
exports.default = LoginSchema;
//# sourceMappingURL=Login.js.map