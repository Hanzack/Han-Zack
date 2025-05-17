// Variables with different types
let username: string = "Winnie";
let userAge: number = 35;
let isAdmin: boolean = true;
let scores: number[] = [85, 90, 78];

// Constants with type annotations
const PI: number = 3.14159;
const greeting: string = "Hello, TypeScript!";
// Interface for a Person object
interface Person {
  name: string;
  age: number;
  email: string;
}

// Example Person
const person1: Person = {
  name: "Bobby",
  age: 27,
  email: "bob@hotmail.com"
};

// Type for a calculator function
type Calculator = (x: number, y: number) => number;

// Examples of calculator functions
const add: Calculator = (x, y) => x + y;
const subtract: Calculator = (x, y) => x - y;

// Difference:
// Interface is used to define object shapes
// Type alias can define any type (object, function, union, etc.)
// Function with typed parameters and typed return
function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

// Arrow function with type annotations
const divide = (a: number, b: number): number => {
  return a / b;
};

// Function demonstrating type assertion
function getLength(input: string | number): number {
  if ((input as string).length !== undefined) {
    // Type assertion to string to access length property
    return (input as string).length;
  } else {
    return input.toString().length;
  }
}
// Example usage of the functions
const addResult = add(5, 10);