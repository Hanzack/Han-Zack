export function printPerson(person: Person): string {
  return `${person.name} (${person.age}) - ${person.email}`;
}

export const double = (num: number): number => num * 2;
// const divide = (x: number, y: number): number => x / y;
// const operations = { add, subtract, multiply, divide };