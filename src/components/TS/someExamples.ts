// Types Data in JS
// 1.null
// 2.undefined
// 3.number
// 4.string
// 5.boolean
// 6.object
// 7.BigInt
// 8.Symbol

// ------------Basic types into variable----------------
let age: number = 30;
let names: string = "Nikita";
let isDone: boolean = false;
let myNull: null = null;
let myUndefined: undefined = undefined;
let x: any = 30;

// -----------------Function--------------------
//function return type
function foo(): void {
  console.log("something");
}

//function with typed parameters and return type
function add(x: number, y: number): number {
  return x + y;
}

//function with optional parameter
function great(name?: string): void {
  console.log(`Hello ${name ?? "world"}`);
}

//function with dafault parameter
function repeat(text: string, times: number = 3): string {
  return text.repeat(times);
}

//function with rest parameter
function sum(...values: number[]): number {
  return values.reduce((acc, value) => acc + value, 0);
}
