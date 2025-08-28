function checkSign(num) {
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
}

console.log(checkSign(-11));  

//anonymous funcrion
const magic = () => new Date();

//arrow functions with parameter
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); // Outputs: [1, 2, 3, 4, 5]

//arrow functions with higher order functions
