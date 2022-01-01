"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LogSchema = new mongoose_1.default.Schema({
    accountID: {
        type: String,
        required: false,
        default: null,
    },
    authorizationToken: {
        type: String,
        required: false,
        default: null,
    },
    type: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    loggedIP: {
        type: String,
        required: false,
    },
    data: {
        type: Object,
        required: false,
        default: null,
    },
    headers: {
        type: Object,
        required: false,
        default: null,
    },
    body: {
        type: Object,
        required: false,
        default: null,
    },
    endpoint: {
        type: String,
        required: false,
        default: null,
    },
});
exports.default = LogSchema;
//# sourceMappingURL=Logs.js.map