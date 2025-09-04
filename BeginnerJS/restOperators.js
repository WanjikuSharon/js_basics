const sum = (function () {
    return function sum(...args) {
        return args.reduce((acc, curr) => acc + curr, 0);
    };

})();
console.log(sum(1, 2, 3, 4)); // Outputs: 10