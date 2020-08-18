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
var sieve = function (limit) {
    var range = __spread(Array(limit + 1).keys()).slice(2); // this magic thing generates a range of numbers from 2 to a limit (including limit hence the `+1`)
    var primes = [];
    var _loop_1 = function () {
        // shift function eliminates first element by default and returns it, so its perfect for the algo as we want to keep the starting points always
        // (that exclamation mark at the end is for TypeScript to shut up, its rightly mad cause shift can return undefined when there is nothing to delete and i specified that the array is for numbers only
        // but we take care of that by checking it in the while loop)
        var n = range.shift();
        primes.push(n); // we can do that because its the starting point and again, we want to keep the starting points always, and were sure they are correct because of the next steps
        // now we need to filter out the multiples of that number
        // we overwrite the value of range with new filtered one thats using (again...) falseyness of 0, so if something is not divisible by n with the rest of zero we'll keep it
        range = range.filter(function (num) { return num % n; });
    };
    // were using the fact that 0 is falsey and will break the loop and that we will eliminate all of the nums from that array eventually so it wont be an infinite loop
    while (range.length) {
        _loop_1();
    }
    return primes;
};
exports.default = sieve;
//# sourceMappingURL=myPreferredNormal.js.map