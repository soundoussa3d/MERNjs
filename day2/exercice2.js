//Task 1 : Going back in Time!

//1
let num =5 ;
function factorial(n) {
    let fact = 1;
    for (let i = 2; i < n+1; i++) {
        fact*=i;
    }
    return fact;
}
console.log(factorial(num));

//2
let num1=123456;
function nDigits(n) {
    let count = 0;
    while (n!=0) {
        n=Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(nDigits(num1));

//3
let num2= 5;
function numebrToDay(n) {
    let day ="";
    switch (n) {
        case 1:
            day='Monday';
            break;
        case 2:
            day='Tuesday';
            break;
        case 3:
            day='Wednesday';
            break;
        case 4:
            day='Thursday';
            break;
        case 5:
            day='Friday';
            break;
        case 6:
            day='Saturday';
            break;
        case 7:
            day='Sunday';
            break;
        default:
            day='Unvalid Day';
            break;
    }
    return day;
}
console.log(numebrToDay(num2));

//4
let a=15;
let b=6;
let c=2.9;
function max(x ,y,z) {
    if (x>y && x>z) {
        return x;
    } else if (y > x && y > z){
        return y;
    } else {
        return z;
    }
}
console.log("the max number is : "+max(a,b,c));

//5
let myScore= 90;
function myGrade(score) {
    
    if (score>85) {
        return "A";
    } 
    else if (score>70) {
        return"B";   
    }
    else if (score>55) {
        return "C";   
    }
    else if (score>40) {
        return "D";   
    }
    else if (score>15) {
        return "E";   
    }
    else{
        return "D";   
    }
}
console.log(myGrade(myScore));


//Task2 : The Estended Factorial
let n=5;
let p=2;
function combinator(n,p) {
    let nfact=factorial(n);
    let pfact=factorial(p);
    let npfact=factorial((n-p));
    return (nfact / (pfact*npfact)) ;
}
console.log(combinator(n,p));

//Task3: The Calculator
let num3 =5;
let num4= 1 ;
let op="*";
function calculator(a,operation , b) {
    switch (operation) {
        case "+":
            return a+b;
        case "-":
            if (a>b) {
                return a-b;
            }
            else return b-a;
            
        case "*":
            return a*b;
        case "/":
            if (a>b) {
                return a/b;
            }
            else return b/a;
        case "%":
            if (a>b) {
                return a%b;
            }
            else return b%a;
        case "c":
            if (a>b) {
                return combinator(a,b); 
            }
            else return combinator(b,a); 
        default:
            break;
    }
}
console.log(calculator(num3,op,num4));
