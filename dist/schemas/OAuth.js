"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// TODO: Add an expiry param.
// so we can look if the token needs to be refreshed when restoring
exports.OAuthSchema = new mongoose_1.default.Schema({
    accessToken: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
    discordId: {
        type: String,
        required: true,
    },
});
exports.default = exports.OAuthSchema;
//# sourceMappingURL=OAuth.js.map