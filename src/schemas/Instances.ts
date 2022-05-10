import { Schema } from "mongoose";

export const InstancesModel = new Schema({
    linkedAccountID: {
        type: String,
        required: true,
    },
    clientId: {
        type: String,
        required: false,
        default: null,
    },
    clientSecret: {
        type: String,
        required: false,
        default: null,
    },
    botToken: {
        type: String,
        required: false,
        default: null,
    },
    customConfig: {
        type: Object,
        required: false,
        default: {
            setupEmbed: {
                title: "Letoa Verification",
                emoji: ":white_check_mark:",
                buttonLabel: "Verify",
                description:
                    "Click the verify button and authorize the bot to receive the **Verification Role** and access to the rest of the server.",
                color: 3830487,
                image: "https://cdn.letoa.me/letoa_rewrite.png",
            },
            botActivity: {
                customStatus: "letoa.me | /help",
            },
            defaults: {
                embedImage: "https://cdn.letoa.me/letoa_rewrite.png",
                embedFooter: "Letoa",
                botName: "Letoa",
            },
            inviteEmbed: {
                enabled: true,
                supportServerInvite: "https://discord.letoa.me",
                botInvite: "https://letoa.me/bot",
            },
            pingEmbed: {
                enabled: true,
                websiteURL: "https://letoa.me",
            },
            infoEmbed: {
                enabled: true,
            },
        },
    },
    activeServer: {
        type: String,
        required: false,
        default: null,
    },
});

export default InstancesModel;
