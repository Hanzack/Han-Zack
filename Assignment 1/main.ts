import { printPerson, double } from "./utils";

type Person = {
  name: string;
  age: number;
  email: string;
};

const user: Person = {
  name: "Tom",
  age: 29,
  email: "tom@yahoo.com",
};

console.log(printPerson(user));
console.log(double(4));

(async () => {
  const msg = await delayedMessage("Processing...");
  console.log(msg);
})();
function delayedMessage(arg0: string) {
    throw new Error("Function not implemented.");
}

