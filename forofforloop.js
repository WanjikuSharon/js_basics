const incomes = [1000, 2000, 3000, 4000, 5000]

total = 0;

for (income of incomes) {
    console.log(income);
  total += income;
}
console.log(total);