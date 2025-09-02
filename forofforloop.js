let incomes = [1000, 2000, 3000, 4000, 5000]

total = 0;

for (const income of incomes) {
    //print out individual income
    console.log(income);
  total += income;
}
//print out the total
console.log(total);

//Get characters in a name or sentences
let fullName = ["My name is Ivy Stephanie Nudngu"]

for (char in fullName) {
    console.log(char)
}