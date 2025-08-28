function myFunction(str) {
    return parseInt(str);
}
 var myNumber = myFunction("42");
 console.log(myNumber); // Outputs: 42


//with Radix
function myRadix() {
    return parseInt("10011", 2);
}

var rdx = myRadix();
console.log(rdx); // Outputs: 19