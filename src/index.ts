// Playground file — feel free to edit and re-run with `npm start`.

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

function double(n: number): number {
  return n * 2;
}

class Counter {
  private count = 0;

  increment(): number {
    this.count += 1;
    return this.count;
  }
}

const alice: Person = { name: "Alice", age: 30 };
console.log(greet(alice));

const numbers = [1, 2, 3, 4, 5];
console.log("Doubled:", numbers.map(double));

const counter = new Counter();
console.log("Counter:", counter.increment(), counter.increment(), counter.increment());
