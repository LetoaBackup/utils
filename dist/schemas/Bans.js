"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BanSchema = new mongoose_1.Schema({
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
exports.default = exports.BanSchema;
//# sourceMappingURL=Bans.js.map