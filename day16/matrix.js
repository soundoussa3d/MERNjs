const mat1=[[1,2,3], [3, 2, 1],[1, 1, 1] ];
const mat2 =[[2, 2, 1],[3, 2, 3],[1, 1, 3]] ;
var matf=[];

console.log(mat1[0].length);
for (let i = 0; i < mat1.length; i++) {
    var mat3=[];
    for (let j = 0; j < mat1[i].length; j++) {
        mat3.push(mat1[i][j]+mat2[i][j]);        
    }
    matf.push(mat3);
}
console.log(matf);