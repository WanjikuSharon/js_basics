const incomes = [1000, 2000, 3000, 4000, 5000]

total = 0;

for (income of incomes) {
    //print out individual income
    console.log(income);
  total += income;
}
//print out the total
console.log(total);