let num1=10;
let num2=2;
function addNumbers(num1,num2) {
    return num1 + num2;
}
console.log(multiplyNumbers(num1,num2));
function substractNumbers(num1,num2) {
    if (num1>num2) {
        return num1-num2;
    }
    else {
        return num2-num1;
    }
    
}
function multiplyNumbers(num1,num2) {
    return num1 * num2;
}
function divideNumbers(num1,num2) {
    if (num1>num2) {
        return Math.floor(num1/num2);
    }
    else {
        return Math.floor(num2/num1);
    }
    
}
