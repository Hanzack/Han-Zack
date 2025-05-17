// Variables with different types
var username = "Winnie";
var userAge = 35;
var isAdmin = true;
var scores = [85, 90, 78];
// Constants with type annotations
var PI = 3.14159;
var greeting = "Hello, TypeScript!";
// Example Person
var person1 = {
    name: "Bobby",
    age: 27,
    email: "bob@hotmail.com"
};
// Examples of calculator functions
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
// Difference:
// Interface is used to define object shapes
// Type alias can define any type (object, function, union, etc.)
// Function with typed parameters and typed return
function multiply(a, b) {
    return a * b;
}
// Arrow function with type annotations
var divide = function (a, b) {
    return a / b;
};
// Function demonstrating type assertion
function getLength(input) {
    if (input.length !== undefined) {
        // Type assertion to string to access length property
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
// Example usage of the functions
var sum = add(5, 10);
