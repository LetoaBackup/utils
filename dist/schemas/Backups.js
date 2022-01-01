"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BackupsSchema = new mongoose_1.Schema({
    name: {},
    region: {},
    verificationLevel: {},
    explicitContentFilter: {},
    defaultMessageNotifications: {},
    afk: {},
    widget: {},
    iconURL: {},
    bannerURL: {},
    splashURL: {},
    channels: { categories: [], others: [] },
    roles: {},
    bans: {},
    emojis: {},
    createdTimestamp: {},
    guildID: {},
    backup_id: {},
    accountID: { type: String, required: false, default: null },
}, { strict: false, strictQuery: false });
exports.default = BackupsSchema;
//# sourceMappingURL=Backups.js.map