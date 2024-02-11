//Task 1 : Even or Odd
let num= 9;
if (num%2==0) {
    console.log("The number "+num+" is even");
} else {
    console.log("The number "+num+" is odd");
}

//Task 2 Days of the week
var day = 5;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Unvalid Day');
        break;
}


//Task 3 : maximum
let a = 15;
let b = 6;
let c = 2.6;

if (a>b && a>c) {
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else {
    console.log(c);
}



//Task 4: The Teacher
let score = 83;
if (score>85) {
    console.log("A");
} 
else if (score>70) {
    console.log("B");   
}
else if (score>55) {
    console.log("C");   
}
else if (score>40) {
    console.log("D");   
}
else if (score>15) {
    console.log("E");   
}
else{
    console.log("D");   
}