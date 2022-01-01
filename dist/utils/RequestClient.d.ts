import { REST } from "@discordjs/rest";
export declare type RequestClientOptions = {
    authPrefix: "Bot" | "Bearer";
};
export declare class RequestClient extends REST {
    client: REST;
    authPrefix: string;
    constructor({ token, options, }: {
        token: string;
        options?: RequestClientOptions;
    });
    fetchMe(): Promise<unknown>;
}
