



//throw new Error("An error occurred");
//console.log("This line will not be executed because the error was thrown.");







try {
    throw new Error("An error occurred");
}
catch (error: Error | any) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

console.log("This line will be executed because the error was caught.");