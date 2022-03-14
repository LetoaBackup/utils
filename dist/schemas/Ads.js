"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AdSchema = new mongoose_1.Schema({
    /**
     * A snowflake generated ID to also query the database.
     */
    id: {
        type: String,
        required: true,
    },
    /**
     * A brief description about the server / website, also used for querying the users genres.
     */
    description: {
        type: String,
        required: true,
    },
    /**
     * A value that is stored in a timestamp to determine when the ad expires.
     */
    expires: {
        type: Number,
        required: false,
        default: null,
    },
    /**
     * Self-explainatory, states if the ad is expired and if so, it will not show on the website
     */
    expired: {
        type: Boolean,
        required: false,
        default: true,
    },
    /**
     * The image displayed on the website
     */
    image: {
        type: String,
        required: true,
    },
    /**
     * Used to fetch the guild information. Multiple algorithms will be used to determine the servers genre.
     */
    guildId: {
        type: String,
        required: false,
        default: null,
    },
    /**
     * What link the user will be redirected to after clicking the link
     */
    redirectLink: {
        type: String,
        required: false,
        default: null,
    },
    /**
     * Determines how many users have clicked on the ad
     */
    clicks: {
        type: String,
        required: false,
        default: 0,
    },
});
exports.default = exports.AdSchema;
//# sourceMappingURL=Ads.js.map