let array1=[ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];
//let array1=['     ','a', ' ' ];
function findUniq5(array1) {
    let array2=[];
    let arrayg=[];
    for (let i = 0; i < array1.length; i++) {
        array2=array1[i].split('');
        arrayg.push(array2);
    }
    //console.log(arrayg);

    for (let i = 0; i < arrayg.length; i++) {
        //console.log(arrayg.length);
            /*if (!arrayg[i].includes(arrayg[i][0])) {
                console.log(i);
                return array1[i];
            }*/
            console.log(arrayg[i]);
            for (let j = 0; j < arrayg[i].length; j++) {
                var elem=arrayg[i][j];
                if (!arrayg[i].includes(elem.toLowerCase())) {
                    console.log(elem);
                    return array1[i];
                }
            }
    }
        
       
    }
    

//console.log(findUniq(array1));


function findUniq(array1) {
     let array2=[];
     let arrayg=[];
     let array3=[];
     let result= 0 ;
     for (let i = 0; i < array1.length; i++) {
         array2=array1[i].toLowerCase().split('');
         arrayg.push(array2);
     }
     //console.log(arrayg.length);
     //console.log(arrayg[3].includes(arrayg[1][0].toLowerCase()))
    //while (!result) {
        for (let i = 0; i < arrayg.length; i++) {
            array3.push(arrayg[i][0]) ;
         }
         console.log(array3);
        for(let i = 0; i < array3.length; i++){
            //console.log(arrayg[i].includes(array3[i].toLowerCase()));
            for (let j = 0; j < arrayg[i].length; j++) {
                if (arrayg[i][j]==array3[i]) {
                    result=i;
                    break;
                }
                
            }
            
        }
    //}
     return array1[result];
 }
 console.log(findUniq(array1));
