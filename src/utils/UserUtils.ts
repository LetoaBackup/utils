import { v1 } from "uuid";

export const generateRandomCharacters = (size: number = 16): string => {
    var s = "";
    var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) return n; //1-10
        if (n < 36) return String.fromCharCode(n + 55); //A-Z
        return String.fromCharCode(n + 61); //a-z
    };
    while (s.length < size) s += randomchar();
    return s;
};

export const generateToken = (accountId: string): string => {
    const tokens = [];
    tokens.push(Buffer.from(accountId).toString("base64"));
    tokens.push(generateRandomCharacters(32));
    tokens.push(
        Buffer.from(new Date().getTime().toString()).toString("base64")
    );
    return tokens.join(".");
};

export const generateUserId = async () => {
    return v1();
};
