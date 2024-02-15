let array = [ [5,0],[11,18],[1,6]] //2people
var a =0;
var b=0;
for (let i = 0; i < array.length; i++) {
    a+=array[i][0];
    b+=array[i][1];
}

if (a>b) {
    let x=a-b;
    console.log("there are " + x+ " peopple");
}
else if (a==b){
    console.log("no one left on the bus");
}
else {
    console.log("there is an error in the counting");
}
