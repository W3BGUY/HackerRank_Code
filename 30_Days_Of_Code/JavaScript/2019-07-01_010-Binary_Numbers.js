/*
 * Objective 
 * Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!
 * 
 * Task 
 * Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation.
 * 
 * Input Format
 * 
 * A single integer, .
 * 
 * Constraints
 * 
 * Output Format
 * 
 * Print a single base- integer denoting the maximum number of consecutive 's in the binary representation of .
 * 
 * Sample Input 1
 * 
 * 5
 * Sample Output 1
 * 
 * 1
 * Sample Input 2
 * 
 * 13
 * Sample Output 2
 * 
 * 2
 * Explanation
 * 
 * Sample Case 1: 
 * The binary representation of  is , so the maximum number of consecutive 's is .
 * 
 * Sample Case 2: 
 * The binary representation of  is , so the maximum number of consecutive 's is .
*/

var input=3;
main();

function main(){
  const n=13;//parseInt(readLine(), 10);
  var binNum=(n).toString(2);
  
  var currentCount=0;
  var maxCount=0;
  for(var i=0;i<binNum.length;i++){
    if(binNum[i]==0){
      currentCount=0;
    }else{
      currentCount++;
    }
    if(currentCount>maxCount){
      maxCount=currentCount;
    }
  }
  
  process.stdout.write(maxCount.toString());
  
}

