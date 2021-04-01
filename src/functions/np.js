dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
var nj = require('numjs');

var a = nj.array([2,3,4]);
console.log(a.data)
const transpose = arr => {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < i; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[j][i];
          arr[j][i] = tmp;
       };
    }
}


function randomize(a,b){
    var result =[]
    for(var i =0; i<a;i++){
        tempArray =[]
        for(var ii =0;ii<b;ii++){
            tempArray.push(Math.random())
        }
        result.push(tempArray)
    }
    return(result)
}
module.exports = randomize