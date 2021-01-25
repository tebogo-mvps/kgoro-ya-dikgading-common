"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPaymentString = exports.toDateString = void 0;
const toDateString = (date, separator = '-') => `${date.getFullYear()}${separator}${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}${separator}${date.getDate() < 9 ? '0' : ''}${date.getDate()}`;
exports.toDateString = toDateString;
const toPaymentString = (amount) => `R ${amount}${Math.floor(amount) === amount ? '.00' : ''}`;
exports.toPaymentString = toPaymentString;
//# sourceMappingURL=string.js.map