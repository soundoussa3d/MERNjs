//Task1: Warm up
const object={
    firstname : "soundous",
    lastname: "saadeddine",
    age:20,
    get firstname() {
        return this.firstname;
    },
    set fullname(newfirstname) {
        this.firstname=newfirstname
    },
    get lastname() {
        return this.lastname;
    },
    set lastname(newlastname) {
        this.lastnamename=newlastname;
    },
    get fullname() {
        return this.firstname + ' '+this.lastname;
    },
}


//Task 2 : Are you Older Than me
class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    older(p){
        if (this.age > p.age ) {
            return "I'm older than "+p.name;
        }
        else{
            return "I'm younger than "+p.name;
        }
    }
}
p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 18);
console.log(p1.older(p2));

//Task 3 : Most Occurred
var array = [4,7,2,7,2,7];
var array2=[];
var array3=[];
function mostOccurred(array) {
    for (let i=0; i<array.length; i++) {
       var count = 0;
       var m=array[i];
       if (!array3.includes(m)) {
       for (let j = 0; j < array.length; j++) {
            if (m==array[j]) {
                count++;
            }
        }
        array3.push(m);
        array2.push(count);
       }
    }
    var max = array2[0];
    var ind=0;
    for (let i = 1; i < array2.length; i++) {
        if (array2[i]>max) {
            max=array2[i];
            ind=i;
        }
        
    }
    return array3[ind];
}
console.log(mostOccurred(array));
