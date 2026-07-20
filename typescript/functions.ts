//function definition
function printContact(name: string, number: string) {
    console.log(`Name: ${name}, Number: ${number}`);
}

//function calls
printContact("Ahmed", "0113434343");
printContact("Ali", "0113434344");
printContact("Mohamed", "0113434345");
printContact("Alaa", "0122323232");




function sum(number: number, y: number): number {
    return number + y;
}


const result = sum(10, 40);
console.log(result); // Output: 50



function echo() {
    console.log("Hello World");
}

echo();


const subtract = (number1: number, number2: number): number => { return number1 - number2; };


console.log(subtract(10, 5)); // Output: 5