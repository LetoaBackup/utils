"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BackupsSchema = new mongoose_1.Schema({
    guildID: {},
    backup_id: {},
    accountID: { type: String, required: false, default: null },
    data: {
        required: false,
        default: null,
    },
}, { strict: false, strictQuery: false });
exports.default = exports.BackupsSchema;
//# sourceMappingURL=Backups.js.map