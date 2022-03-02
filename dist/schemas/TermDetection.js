"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermDetectionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TermDetectionSchema = new mongoose_1.Schema({
    guildId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: false,
        default: Date.now(),
    },
    /**
     * fetch the invite to see if its still valid.
     */
    inviteCode: {
        type: String,
        required: false,
        default: null,
    },
    enabled: {
        type: Boolean,
        required: false,
        default: false,
    },
});
exports.default = exports.TermDetectionSchema;
//# sourceMappingURL=TermDetection.js.map