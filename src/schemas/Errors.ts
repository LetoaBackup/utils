import { Schema } from "mongoose";

export const ErrorSchema = new Schema({
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

export default ErrorSchema;
