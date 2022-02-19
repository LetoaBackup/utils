import mongoose from "mongoose";

export const IntervalsModel = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    /**
     * How many seconds we backup
     */
    interval: {
        type: Number,
        required: false,
        default: 0,
    },
    enabled: {
        type: Boolean,
        required: false,
        default: false,
    },
});

export default IntervalsModel;
