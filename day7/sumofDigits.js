var num = 16 ;
function sumofdigits(num) {
    while (num.toString().length>1) {
        var digits = [];
        while (num != 0) {
            digits.push(num % 10);
            num = Math.trunc(num / 10);
        }
        digits.reverse();
        for (let i = 0; i < digits.length; i++) {
            num+=digits[i]; 
        }
        }
        return num;
}
console.log("The sum of the digits in " + num + " is: "+sumofdigits(num));


