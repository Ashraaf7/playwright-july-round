class Player {
    //attributes/properties/fields >> variables
    name: string = "";
    age: number = 0;
    number: number = 0;
    position: string = "";
    favLeg: string = "";
=
    //constructor >> special method
    //empty/default constructor
    // constructor() {

    // }

    //parameterized constructor
    constructor(name: string, age: number);
    constructor(name: string, age: number, number: number, position: string, favLeg: string);


    constructor(name: string, age: number, number?: number, position?: string, favLeg?: string) {
        this.name = name;
        this.age = age;
        if (favLeg) {
            this.favLeg = favLeg;
        }
        if (number) {
            this.number = number;
        }
        if (position) {
            this.position = position;
        }
    }


    //methods > functions
    displayPlayerInfo(): void {
        console.log(`Player Name: ${this.name}`);
        console.log(`Player Age: ${this.age}`);
        console.log(`Player Number: ${this.number}`);
        console.log(`Player Position: ${this.position}`);
        console.log(`Player Favorite Leg: ${this.favLeg}`);
    }
}

let player1 = new Player("Emam Ashour", 28, 8, "Midfielder", "Right");
let player2 = new Player("Mohamed Salah", 31, 11, "Forward", "Left");
let player3 = new Player("Mohamed Elneny", 31, 25, "Midfielder", "Right");
let player4 = new Player("Mohamed Elshennawy", 31, 1, "Goalkeeper", "Right");
let player5 = new Player("Ahmed Hegazi", 31, 5, "Defender", "Right");
let player6 = new Player("Trezeguet", 31, 22, "Winger", "Right");
let player7 = new Player("Ali Gabr", 31, 4, "Defender", "Right");
let player8 = new Player("Ahmed Fathi", 31, 2, "Defender", "Right");
let player9 = new Player("Ahmed Hossam", 31, 3, "Defender", "Right");
let player10 = new Player("Ziko", 31, 25, "Midfielder", "Right");
let player11 = new Player("Marmoush", 31, 11, "Forward", "Left");
let player12 = new Player("Ahmed Hegazi", 31);
let player13 = new Player("Ahmed Hegazi", 31);


