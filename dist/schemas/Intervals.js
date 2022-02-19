"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalsModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.IntervalsModel = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    /**
     * How many seconds we backup
     */
    interval: {
        type: Number,
        required: false,
        default: 0,
    },
    enabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    lastBackup: {
        type: Number,
        required: false,
        default: null,
    },
});
exports.default = exports.IntervalsModel;
//# sourceMappingURL=Intervals.js.map