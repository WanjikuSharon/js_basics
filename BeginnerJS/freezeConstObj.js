// function freezeObject(obj) {
//     Object.freeze(obj);
// }

// const myObj = {
//     name: "John",
//     age: 30
// };

// freezeObject(myObj);
function freezeObject(obj) {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 3.14159;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObject();
console.log(PI);