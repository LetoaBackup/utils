"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ResetPassword = new mongoose_1.default.Schema({
    accountID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    loggedIP: {
        type: String,
        required: false,
        default: null,
    },
    expired: {
        type: Boolean,
        required: false,
        default: false,
    },
    visits: {
        type: Number,
        required: false,
        default: 0,
    },
    createdAt: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    resetToken: {
        type: String,
        required: true,
    },
});
exports.default = ResetPassword;
//# sourceMappingURL=ResetPassword.js.map