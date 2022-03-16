"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blacklists = void 0;
const mongoose_1 = require("mongoose");
exports.Blacklists = new mongoose_1.Schema({
    blacklisted: {
        type: Boolean,
        required: false,
        default: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: false,
        default: Date.now(),
    },
});
exports.default = exports.Blacklists;
//# sourceMappingURL=Blacklists.js.map