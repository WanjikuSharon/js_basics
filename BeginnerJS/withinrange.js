function myRandomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRand = myRandomRange(1, 100);

console.log(myRand); // Example usage