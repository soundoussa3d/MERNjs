let num= "4556364607935616";
let num1="1";
let str="Skippy";

function maskify(num) {
    //console.log(num);
    num = num.split("");
    for (let i = num.length-5 ; i >=0; i--) {
        num[i]="#"
    }
    num=num.join("");
    return num;
}
console.log(maskify(str));