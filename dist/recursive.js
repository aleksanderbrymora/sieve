"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sieve = function (limit, range, primes) {
    if (range === void 0) { range = __spread(Array(limit + 1).keys()).slice(2); }
    if (primes === void 0) { primes = []; }
    if (range.length === 0)
        return primes;
    var n = range.shift();
    return sieve(limit, range.filter(function (num) { return num % n; }), __spread(primes, [n]));
};
exports.default = sieve;
//# sourceMappingURL=recursive.js.map