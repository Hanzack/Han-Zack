// Basic types
let personName: string = "Winnie";
let age: number = 35;
let isStudent: boolean = false;
let hobbies: string[] = ["Reading", "Gaming"];

// Interface for a Person
interface Person {
  name: string;
  age: number;
  email: string;
}

const person1: Person = {
  name: "Bobby",
  age: 25,
  email: "bob@hotmail.com"
};

// Type for a calculator function
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

console.log(`${person1.name} is ${person1.age} years old.`);
console.log(`Add: ${add(5, 3)}`);
console.log(`Multiply: ${multiply(4, 2)}`);
