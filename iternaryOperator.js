function checkSign(num) {
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
}

console.log(checkSign(-11));  

//anonymous function
const magic = () => new Date();

//arrow functions with parameter
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); // Outputs: [1, 2, 3, 4, 5]

// Define the logic functions for calculations
const area = (radius) => Math.PI * radius * radius;
const diameter = (radius) => 2 * radius;
const circumference = (radius) => 2 * Math.PI * radius;

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate([5], area));
console.log(calculate([5], diameter));
console.log(calculate([5], circumference));


// More concise version using arrow function and map
const calculateArrow = (radiusArray, logic) => radiusArray.map(radius => logic(radius));

console.log("Using arrow function version:");
console.log(calculateArrow([3, 5, 7], area));
console.log(calculateArrow([3, 5, 7], diameter));

// You can also use it with inline arrow functions
console.log("Using inline functions:");
console.log(calculateArrow([2, 4], (r) => r * r)); // Square of radius

//arrow functions with higher order functions
