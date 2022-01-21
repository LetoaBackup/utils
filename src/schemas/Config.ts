import mongoose from "mongoose";

export const ConfigModel = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    verificationRole: {
        type: String,
        required: false,
        default: null,
    },
    verificationEnabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    loggingChannel: {
        type: String,
        required: false,
        default: null,
    },
    customDomain: {
        type: String,
        required: false,
        default: null,
    },
    backupInterval: {
        type: Number,
        required: false,
        default: null,
    },
    backupAutomatically: {
        type: Boolean,
        default: false,
        required: false,
    },
    customColour: {
        type: String,
        required: false,
        default: null,
    },
    redirectLink: {
        type: String,
        required: false,
        default: null,
    },
    logIp: {
        type: Boolean,
        required: false,
        default: false,
    },
    vpnCheck: {
        type: Boolean,
        required: false,
        default: false,
    },
});

export default ConfigModel;
