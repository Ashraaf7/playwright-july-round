//variable
let i = 0;

//arr froom 1 to 35
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

//for (start; condition; increment/decrement)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let j in arr) {
    console.log(arr[j]);
}



let k = 0;
while (k < arr.length) {
    console.log(arr[k]);
    k++;
}

do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);


//while / do while loop
