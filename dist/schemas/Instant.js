"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantSchema = void 0;
const mongoose_1 = require("mongoose");
exports.InstantSchema = new mongoose_1.Schema({
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
exports.default = exports.InstantSchema;
//# sourceMappingURL=Instant.js.map