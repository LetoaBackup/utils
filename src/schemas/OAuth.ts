import mongoose from "mongoose";

// TODO: Add an expiry param.
// so we can look if the token needs to be refreshed when restoring
export const OAuthSchema = new mongoose.Schema({
    accessToken: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
    discordId: {
        type: String,
        required: true,
    },
});

export default OAuthSchema;
