function isEven(N){
  if(N == 0){
    return true;
    }else if(N == 1){
    return false;
    }else if(N < 0){
    N = -N;
    return isEven(N);
    }else
    N = N - 2;
    return isEven(N);
  }
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??