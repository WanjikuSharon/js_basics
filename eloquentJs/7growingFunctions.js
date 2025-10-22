// A helper function to add leading zeros to a number
function zeroPad(number, width) {
  // Convert the number to a string
  let string = String(number);
  
  // Add "0" in front until the string reaches the desired length
  while (string.length < width) {
    string = "0" + string;
  }
  
  // Return the padded string
  return string;
}

// The main function to print the farm inventory
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

// Calling the function with the number of animals
printFarmInventory(7, 11, 3);
