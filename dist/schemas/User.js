"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.UserModel = new mongoose_1.default.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
    },
    discordTag: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: null,
    },
    guilds: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        required: false,
        default: null,
    },
    banned: {
        type: Boolean,
        required: false,
        default: false,
    },
    /**
     * Starting to add premium towards user accounts with linking up with patreon and then selecting a guild to activate premium
     * 0 - null
     * 1 - Gold Tier Of Premium
     * 2 - Diamond Tier Of Premium
     * 3 - Platinum  Tier Of Premium
     */
    premium: {
        type: Number,
        required: false,
        default: 0,
    },
    availablePremiumServers: {
        type: Number,
        required: false,
        default: 0,
    },
    activatedPremiumServers: {
        type: Array,
        required: false,
        default: [],
    },
    linkedPatreonAccount: {
        type: String,
        required: false,
        default: null,
    },
});
exports.default = exports.UserModel;
//# sourceMappingURL=User.js.map