var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var name = "Winnie";
var age = 35;
console.log("Hello, my name is ".concat(name, " and I am ").concat(age, " years old."));
var person = { name: "Bobby", age: 27, email: "bob@hotmail.com" };
var personName = person.name, personAge = person.age;
console.log(personName, personAge);
var numbers = [1, 2, 3];
var first = numbers[0], second = numbers[1];
console.log(first, second);
var arr1 = [1, 2];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [3, 4], false); // Spread
console.log(arr2);
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sum(1, 2, 3, 4));
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name, "!");
}
console.log(greet());
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var multiply = function (x, y) { return x * y; };
