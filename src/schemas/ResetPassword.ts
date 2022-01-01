import mongoose from "mongoose";

const ResetPassword = new mongoose.Schema({
    accountID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    loggedIP: {
        type: String,
        required: false,
        default: null,
    },
    expired: {
        type: Boolean,
        required: false,
        default: false,
    },
    visits: {
        type: Number,
        required: false,
        default: 0,
    },
    createdAt: {
        type: Number,
        required: false,
        default: new Date().getTime(),
    },
    resetToken: {
        type: String,
        required: true,
    },
});

export default ResetPassword;
