// object
let apiResponse = {
    id: 1,
    name: "Ashraf",
    age: 25,
    isActive: true,
    userInfo: {
        email: "ashraf@example.com",
        phone: "123-456-7890"
    }
}

let hobbies = {
    sports: ["soccer", "basketball", "tennis"],
    music: ["rock", "jazz", "classical"]
}

console.log(apiResponse.userInfo.email) // Ashraf;

//String ...name 

let user = { ...apiResponse, ...hobbies } //merge 2 objects into 1
console.log(user);


type User = {
    email: string,
    password: string,
}


let user1: User = {
    email: "ashraf@example.com",
    password: "securepassword123",
}

console.log(user1);