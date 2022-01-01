"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConfigModel = new mongoose_1.default.Schema({
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
});
exports.default = ConfigModel;
//# sourceMappingURL=Config.js.map