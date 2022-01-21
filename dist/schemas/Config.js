"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ConfigModel = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    verificationRole: {
        type: String,
        required: false,
        default: null,
    },
    verificationEnabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    loggingChannel: {
        type: String,
        required: false,
        default: null,
    },
    customDomain: {
        type: String,
        required: false,
        default: null,
    },
    backupInterval: {
        type: Number,
        required: false,
        default: null,
    },
    backupAutomatically: {
        type: Boolean,
        default: false,
        required: false,
    },
    customColour: {
        type: String,
        required: false,
        default: null,
    },
    redirectLink: {
        type: String,
        required: false,
        default: null,
    },
    logIp: {
        type: Boolean,
        required: false,
        default: false,
    },
    vpnCheck: {
        type: Boolean,
        required: false,
        default: false,
    },
});
exports.default = exports.ConfigModel;
//# sourceMappingURL=Config.js.map