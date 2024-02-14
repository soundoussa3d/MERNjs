let array=[3,2,6,2,1,3,7,8,7,9];
var array2=[];
var arrays=[];
for (let i = 0; i < array.length; i++) {
    var num=array[i];
    var count=0
    var array1=[]
    for (let j = 0; j < array.length; j++) {
        if (num==array[j]&&!array2.includes(num)) {
            count++;
        } 
    }
    if (!array2.includes(num)) {
        for (let j = 0; j < count; j++) {
            array1.push(num)
        }
        arrays.push(array1);
        array2.push(num); 
    }
    
}
console.log(arrays);