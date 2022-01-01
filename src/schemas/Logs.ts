import mongoose from "mongoose";

export const LogSchema = new mongoose.Schema({
    accountID: {
        type: String,
        required: false,
        default: null,
    },
    authorizationToken: {
        type: String,
        required: false,
        default: null,
    },
    type: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    loggedIP: {
        type: String,
        required: false,
    },
    data: {
        type: Object,
        required: false,
        default: null,
    },
    headers: {
        type: Object,
        required: false,
        default: null,
    },
    body: {
        type: Object,
        required: false,
        default: null,
    },
    endpoint: {
        type: String,
        required: false,
        default: null,
    },
});

export default LogSchema;
