//Sort & Search

//Bubble Sort 
let array= [5,3,8,12,7];
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if (array[i]<array[j]) {
              let n= array[j];
              array[j] = array[i];
              array[i]=n;
           }
           
        }
    }
    return array;
}



//Selection sort
function selectionsort(array) {
    for (let i = 0; i < array.length; i++) {
        var min= array[i];
        var ind= i;
        for (let j = i; j < array.length; j++) {
            if (array[i]>array[j])  {
                min=array[j]
                ind=j;
            }
        }
        array[ind]=array[i]
        array[i]=min;

    }
    return array;

}

    

//console.log(array);

//insertion Sort
console.log(array)

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let min = array[i]
      let j
      for (j = i - 1; j >= 0 && array[j] > min; j--) {
        array[j + 1] = array[j]
      }
      array[j + 1] = min
    }
    return array
  }
  console.log(insertionSort(array));


  //Linear Search
  function linearSearch(array) {
     let num=82;
     for (let i = 0; i < array.length; i++) {
       if (array[i]===num){
         return num+" is here";
       }
       
     }
     return "nothing";
  }
  console.log(linearSearch(array))

  //Binary Search
let arr=[2,9,15,18,24,44,48,49,93,94]
  function binarySearch(array, num) {
    var c= Math.floor(array.length/2);
    if (array[c]>num) {
        for (let i = 0; i < c; i++) {
            if (array[i]===num){
              return num+" is here";
            }
          }
    }
    else{
        for (let i = c; i < array.length; i++) {
            if (array[i]===num){
              return num+" is here";
            }
          }
    }
    
    return "nothing";
 }
 console.log(binarySearch(arr,24))