import { Schema } from "mongoose";

export const BackupsSchema = new Schema(
    {
        guildID: {},
        backup_id: {},
        accountID: { type: String, required: false, default: null },
        data: {},
    },
    { strict: false, strictQuery: false }
);

export default BackupsSchema;
