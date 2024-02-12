//Task 1 : Factorial

let numb = 5;
var fact=1;
for (let i = 2; i <numb+1; i++) {
   fact*=i;  
}
console.log(fact);

//Task 2 : How many digits?
var num = 123542;
var count=0;
while(num!=0) {
    num = Math.floor(num/10);
    count++;
}
console.log(count);

//Task 3 : Time to draw

for (let i = 1; i < 8; i+=2) {
    switch (i) {
        case 1:
            console.log("   *")
            break;
        case 3:
            console.log("  ***")
            break;
        case 5:
            console.log(" *****")
            break;
        case 7:
            console.log("*******")
            break;
        default:
            break;
    }
}

