"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nestedFors_1 = __importDefault(require("./nestedFors"));
var myPreferredNormal_1 = __importDefault(require("./myPreferredNormal"));
var recursive_1 = __importDefault(require("./recursive"));
var generator_1 = __importDefault(require("./generator"));
console.log(nestedFors_1.default.calc(100));
console.log(myPreferredNormal_1.default(100));
console.log(recursive_1.default(100));
console.log(generator_1.default(100));
//# sourceMappingURL=index.js.map