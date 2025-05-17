"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.double = void 0;
exports.printPerson = printPerson;
function printPerson(person) {
    return "".concat(person.name, " (").concat(person.age, ") - ").concat(person.email);
}
var double = function (num) { return num * 2; };
exports.double = double;
// const divide = (x: number, y: number): number => x / y;
// const operations = { add, subtract, multiply, divide };
