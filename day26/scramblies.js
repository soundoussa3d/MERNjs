function scramble(str1,str2) {
    const array1=str1.split("");
    const array2=str2.split("");
    const array3=[];
    let count =0;
    for (let i = 0; i < array2.length; i++) {
        let ar2=array2.filter(a=>a==array2[i]).length;
        if (!array3.includes(array2[i])) {
                let ar1=array1.filter(a=>a==array2[i]).length;
                if (ar2==ar1 || (ar2  && ar1>=ar2)) {
                    array3.push(array2[i]);
                    count+=ar2;
                }  
        } 
    }
    if (count ==array2.length) {
        return true;
    }
    else return false;
}

// scramble('rkqodlw', 'world');
// scramble('cedewaraaossoqqyt', 'codewars');
// scramble('katas', 'steak') ;
// scramble(s1, s2), true);

   scramble('cedewaraaossoqqyt', 'codewars'   )//, true );
    scramble('katas',             'steak'      )//, false);
    scramble('scriptjavx',        'javascript' )//, false);
   scramble('scriptingjava',     'javascript' )//, true );
    scramble('scaripatsjava',       'javascripts')//, true );
   scramble('javscripts',        'javascript' )//, false);
    scramble('jscripts',          'javascript' )//, false);
    scramble('aabbcamaomsccdd',   'commas'     )//, true );
    scramble('commas',            'commas'     )//, true );
    scramble('sammoc',            'commas'     )//, true )
