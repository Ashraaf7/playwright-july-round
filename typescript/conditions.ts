let age = 30;

if (age <= 18) {
    console.log("You are underage");
}
else {
    console.log("You are an adult");
}

console.log("remaining code");

let browser = "edge";

if (browser === "Chrome" && age >= 18) {
    console.log("You are using Chrome");
}
else if (browser === "Firefox") {
    console.log("You are using Firefox");
}
else if (browser === "Safari") {
    console.log("You are using Safari");
}
else {
    console.log("You are using an unknown browser");
}

browser = "Safari";
switch (browser) {
    case "Chrome":
        console.log("You are using Chrome");
        break;
    case "Firefox":
        console.log("You are using Firefox");
        break;
    case "Safari":
        console.log("You are using Safari");
        break;
    default:
        console.log("You are using an unknown browser");
}