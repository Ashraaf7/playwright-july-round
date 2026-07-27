
//without oop
let playerName = "Ronaldo";
let playerAge = 38;
let playerNumber = 7;
let playerPosition = "Forward";
let favLeg = "Right";


let playerName2 = "Messi";
let playerAge2 = 35;
let playerNumber2 = 10;
let playerPosition2 = "Forward";
let favLeg2 = "Left";


function displayPlayerInfo(name: string, age: number, number: number, position: string): void {
    console.log(`Player Name: ${name}`);
    console.log(`Player Age: ${age}`);
    console.log(`Player Number: ${number}`);
    console.log(`Player Position: ${position}`);
}

displayPlayerInfo(playerName, playerAge, playerNumber, playerPosition); //ronaldo
displayPlayerInfo(playerName2, playerAge, playerNumber2, playerPosition2); //messi

//console.log(ronaldo);
//console.log(messi);

//with oop
class Player {

    //attributes/properties/fields >> variables
    name: string = "";
    age: number = 0;
    number: number = 0;
    position: string = "";
    favLeg: string = "";



    //methods > functions
    displayPlayerInfo(): void {
        console.log(`Player Name: ${this.name}`);
        console.log(`Player Age: ${this.age}`);
        console.log(`Player Number: ${this.number}`);
        console.log(`Player Position: ${this.position}`);
    }
}

let ronaldo = new Player();
ronaldo.name = "Ronaldo";
ronaldo.age = 38;
ronaldo.number = 7;
ronaldo.position = "Forward";
ronaldo.favLeg = "Right";



let messi = new Player();
messi.name = "Messi";
messi.age = 35;
messi.number = 10;
messi.position = "Forward";
messi.favLeg = "Left";



console.log(messi);
console.log(ronaldo);
ronaldo.displayPlayerInfo();