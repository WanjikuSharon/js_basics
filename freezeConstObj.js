function freezeObject(obj) {
    Object.freeze(obj);
}

const myObj = {
    name: "John",
    age: 30
};

freezeObject(myObj);
