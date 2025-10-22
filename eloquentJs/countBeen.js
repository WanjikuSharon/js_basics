let count = 0;

function countB(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === "B"){
            count++;
        }

    }
    return count;
}

console.log(countB("BoB is a Big Black Bear"));
