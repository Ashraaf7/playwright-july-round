console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");


console.log("start");
setTimeout(() => {
    console.log("setTimeout");
}, 3000);
console.log("end");

//Asynchronous function example
async function getPets() {
    const pets = await fetch("https://petstore.swagger.io/v2/pet/9"); //wait for the fetch to complete
    console.log(await pets.json());
}

getPets(); 
