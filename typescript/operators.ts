//Arithmatic operators (Math operators)
let a: number = 10;
let b: number = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
let result = 0.1 + 0.2;
console.log(Math.round(result));




//Assignment operators
let x: number = 10;
x *= 5; // x = x + 5
x++;
x--;
console.log("Assignment: " + x);


//Comparison operators
let y: any = 5;
let z: any = "5";
console.log(y == z); //value only
console.log(y === z); //value and type

let arr = [1, 2, 3]; //adress of array : xa45rgnm94
let arr2 = arr;//adress of array : xa45rgnm94
arr.push(4);
console.log(arr2);
console.log(arr == arr2);
console.log(arr === arr2);


//Logical operators
let p: boolean = true;
let q: boolean = false;
let r: boolean = false;
console.log(p && q);
console.log(p || q || r);
console.log(!r);
