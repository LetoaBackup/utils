"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ErrorSchema = new mongoose_1.Schema({
    errorCode: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required: false,
        default: {},
    },
});
exports.default = exports.ErrorSchema;
//# sourceMappingURL=Errors.js.map