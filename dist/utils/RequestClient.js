"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestClient = void 0;
const rest_1 = require("@discordjs/rest");
class RequestClient extends rest_1.REST {
    constructor({ token, options = {
        authPrefix: "Bot",
    }, }) {
        super();
        this.client = new rest_1.REST();
        this.authPrefix = "Bot";
        if (token)
            this.client.setToken(token);
        this.authPrefix = options.authPrefix;
    }
    fetchMe() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get("/users/@me");
        });
    }
}
exports.RequestClient = RequestClient;
//# sourceMappingURL=RequestClient.js.map