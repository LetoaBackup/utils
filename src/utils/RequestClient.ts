import { REST, RequestData } from "@discordjs/rest";

export type RequestClientOptions = {
    authPrefix: "Bot" | "Bearer";
};

export class RequestClient extends REST {
    client = new REST();
    authPrefix = "Bot";

    constructor({
        token,
        options = {
            authPrefix: "Bot",
        },
    }: {
        token: string;
        options?: RequestClientOptions;
    }) {
        super();
        if (token) this.client.setToken(token);
        this.authPrefix = options.authPrefix;
    }

    async fetchMe() {
        return this.client.get("/users/@me");
    }
}
