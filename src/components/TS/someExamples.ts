//basic types into variable
let age: number = 30;
let names: string = "Nikita";
let isDone: boolean = false;
let myNull: null = null;
let myUndefined: undefined = undefined;
let x: any = 30;

//function return type
function foo(): void {
  console.log("something");
}

//function with typed parameters and return type
function add(x: number, y: number): number {
  return x + y;
}
