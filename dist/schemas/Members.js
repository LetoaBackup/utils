"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Members = new mongoose_1.default.Schema({
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
    new: {
        type: Boolean,
        required: false,
        default: false,
    },
    expires: {
        type: Number,
        required: false,
        default: null,
    },
});
exports.default = exports.Members;
//# sourceMappingURL=Members.js.map