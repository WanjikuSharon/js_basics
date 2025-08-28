function checkSign(num) {
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
}

console.log(checkSign(-11));  

//anonymous funcrion
const magic = () => new Date();