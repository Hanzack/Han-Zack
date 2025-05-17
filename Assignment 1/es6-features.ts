const userName: string = "Winnie";
const age: number = 35;
console.log(`Hello, my name is ${userName} and I am ${age} years old.`);
const person = { name: "Bobby", age: 27, email: "bob@hotmail.com" };
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

const numbers: number[] = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second);
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread
console.log(arr2);

function sum(...nums: number[]): number { // Rest
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
console.log(greet());
const addNumbers = (x: number, y: number): number => x + y;
const subtractNumbers = (x: number, y: number): number => x - y;
const multiply = (x: number, y: number): number => x * y;

