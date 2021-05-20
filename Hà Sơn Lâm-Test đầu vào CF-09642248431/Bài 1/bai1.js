function findOppositeNumber(n,inputNumber){
    if (inputNumber<0||inputNumber>=n) {
        return "inputNumber sai";
    }
    let result=inputNumber+n/2;
    if(result>n-1){
       result-=n
    }
    return result;
}

 alert(findOppositeNumber(10,4))

