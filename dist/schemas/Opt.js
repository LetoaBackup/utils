"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OptSchema = new mongoose_1.Schema({
    discordId: {
        type: String,
        required: true,
    },
    createdTimestamp: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    reason: {
        type: String,
        required: false,
        default: null,
    },
});
//# sourceMappingURL=Opt.js.map