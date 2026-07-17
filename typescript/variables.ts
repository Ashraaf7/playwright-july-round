let name = "ahmed"; //local 
//name = 10;

var age = 30; //global

const id = 1;
//id = 2; // This will cause an error because 'id' is a constant and cannot be reassigned.


{
    //local scope
    var localName = "local ahmed";
    // let name = "local ahmed"; // This 'name' is scoped to this block and does not affect the outer 'name'
    console.log(localName); // This will log "local ahmed"
}
{
    let name = "local ahmed"; // This 'name' is scoped to this block and does not affect the outer 'name'
}

console.log(localName)