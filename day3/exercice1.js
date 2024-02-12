//task1: Speed Run
let numbers = [1, 2, 3, 4, 5];
//sum function
function sum(n) {
    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum+=n[i];
    }
    return sum;
}
console.log(sum(numbers));

//count of even numbers
let nums=[1,2,3,4,5,6,7,8,9];
function countEven(n) {
    var count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i]%2==0) {
            count++;
        }
    }
    return count;
}
console.log(countEven(nums));


//double

let nums1=[1,2,3,4,5,6,7,8];
function double(n) {
    var array = [];
    for (let i = 0; i < n.length; i++) {
        array.push(n[i]*2);   
    }
    return array;
}
let result = double(nums1); 
console.log(result);


//Task2 : The pair of socks

let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(socks) {
let array = [];
let random = 0
let result=0;
for (let i = 0; i < socks.length; i++) {
    if (!array.includes(socks[i])) {
        var count=0;
        for (let j = 0; j < socks.length; j++) {
            if (socks[i]==socks[j]) {
                count++;
            }
        }
        if (count%2==0) {
            let r=count/2;
            result+=r;
            array.push(socks[i]);
            console.log("there are "+r+" pairs from "+socks[i]);
        }
        else if (Math.floor(count/2)>=1){
            let r=Math.floor(count/2);
            result+=r;
            array.push(socks[i]);
            random++;
            console.log("there are "+r+" pairs from "+socks[i]);
            
        }
        else{
            random++;
        }
        
    }

}
if (array.length == 0) {
    console. log("No matchig pairs");
}
else{
    if
    (random!=0) {
       console. log(" there are "+random + " random socks");
   }
}
return result;
}

console.log(sockMerchant(socks));





