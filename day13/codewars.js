var a =1;
var b=2;
var c=2;
function triangle(a,b,c) {
    var sp=(a+b+c)/2;
    var s= Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c));
    if (s>0) {
    return "true";  
    }
    else{
        return "false ";
    }
}
console.log(triangle(a,b,c));
