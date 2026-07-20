let arr: string[] = ["Ahmed", "Ali", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Abdullah", "Amina", "Bilal"];


let arr2: string[] = new Array("Ahmed", "Ali", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Abdullah", "Amina", "Bilal");


arr.push("Ronaldo")
arr.unshift("Messi")



for (let name in arr) {
    console.log(arr[name]);
}
console.log("---------------------------------------------------");
arr2.pop();
arr2.shift();

for (let name of arr2) {
    console.log(name);
}