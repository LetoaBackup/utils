import { Schema } from "mongoose";

export const TermDetectionSchema = new Schema({
    guildId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: false,
        default: Date.now(),
    },
    /**
     * fetch the invite to see if its still valid.
     */
    inviteCode: {
        type: String,
        required: false,
        default: null,
    },
    enabled: {
        type: Boolean,
        required: false,
        default: false,
    },
});

export default TermDetectionSchema;
