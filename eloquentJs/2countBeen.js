// let count = 0;

// function countB(string){
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === "B"){
//             count++;
//         }

//     }
//     return count;
// }

// console.log(countB("BoB is a Big Black Bear"));

let count = 0;

function countChar(string, char){
    for (let i = 0; i < string.length; i++){
        if(string[i] === char){
            count++;
        }
    }
    return count;
}

console.log(countChar("BoB is a Big Black Bear", "B"));
console.log(countChar("kakkerlak", "k"));