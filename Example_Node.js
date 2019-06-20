/*
 * 
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString='';
let currentLine=0;

var totalSum=0;
var fs=require("fs");
var bString='7 2 45 10 3';
var b=bString.replace(/\s+$/g,'').split(' ').map(bTemp=>parseInt(bTemp,10));

/*
console.log(findNumber(b,1));

  function findNumber(arr,k){
    var response='';
    if(arr.includes(k)){
      response='YES';
    }else{
      response='NO';
    }
    return response;
  }
*/
var v=[[1,1,1,1,1],[1,1,1,0,0],[1,1,1,0,0],[1,1,1,1,1]];
console.log(largestMatrix(v));

  function largestMatrix(arr){
    let totals=[];
for (var i=0; i<4; i++) {
  const [ a0, a1, a2 ] = arr;
  let tmp0 = Object.assign([], a0);
  let tmp1 = Object.assign([], a1);
  let tmp2 = Object.assign([], a2);
  for (var y=0; y<4; y++) {
    let [ e,r,t ] = tmp0;
    const top = e+r+t;
    
    let [ h,j ] = tmp1;
    
    let [ o,p,l ] = tmp2;
    const bottom = o+p+l;
    
    totals.push(top+j+bottom);
    
    tmp0.shift();
    tmp1.shift();
    tmp2.shift();
  }
  
  arr.shift()
}
const max = Math.max(...totals);
console.log(max);
  }


