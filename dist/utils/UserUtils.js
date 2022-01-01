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
exports.generateUserId = exports.generateToken = exports.generateRandomCharacters = void 0;
const uuid_1 = require("uuid");
const generateRandomCharacters = (size = 16) => {
    var s = "";
    var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10)
            return n; //1-10
        if (n < 36)
            return String.fromCharCode(n + 55); //A-Z
        return String.fromCharCode(n + 61); //a-z
    };
    while (s.length < size)
        s += randomchar();
    return s;
};
exports.generateRandomCharacters = generateRandomCharacters;
const generateToken = (accountId) => {
    const tokens = [];
    tokens.push(Buffer.from(accountId).toString("base64"));
    tokens.push((0, exports.generateRandomCharacters)(32));
    tokens.push(Buffer.from(new Date().getTime().toString()).toString("base64"));
    return tokens.join(".");
};
exports.generateToken = generateToken;
const generateUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, uuid_1.v1)();
});
exports.generateUserId = generateUserId;
//# sourceMappingURL=UserUtils.js.map