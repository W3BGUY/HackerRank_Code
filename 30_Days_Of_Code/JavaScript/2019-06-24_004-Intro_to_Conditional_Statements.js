/*
 * Objective 
 * In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!
 * 
 * Task 
 * Given an integer, , perform the following conditional actions:
 * 
 * If  is odd, print Weird
 * If  is even and in the inclusive range of  to , print Not Weird
 * If  is even and in the inclusive range of  to , print Weird
 * If  is even and greater than , print Not Weird
 * Complete the stub code provided in your editor to print whether or not  is weird.
 * 
 * Input Format
 * 
 * A single line containing a positive integer, .
 * 
 * Constraints
 * 
 * Output Format
 * 
 * Print Weird if the number is weird; otherwise, print Not Weird.
 * 
 * Sample Input 0
 * 
 * 3
 * Sample Output 0
 * 
 * Weird
 * Sample Input 1
 * 
 * 24
 * Sample Output 1
 * 
 * Not Weird
 * Explanation
 * 
 * Sample Case 0:  
 *  is odd and odd numbers are weird, so we print Weird.
 * 
 * Sample Case 1:  
 *  and  is even, so it isn't weird. Thus, we print Not Weird.
*/;


const N=parseInt(3,10);
main(N);

const N=parseInt(24,10);
main(N);

function main(N){
  const N=parseInt(N,10);
  // If n is odd, print Weird
  if(N%2){
    process.stdout.write("Weird");
  }else{
    if(parseInt(N)>=2 && parseInt(N)<=5){   // If n is even and in the inclusive range of 2 to 5, print Not Weird
      process.stdout.write("Not Weird");
    }else if(parseInt(N)>=6 && parseInt(N)<=20){  // If n is even and in the inclusive range of 6 to 20, print Weird
      process.stdout.write("Weird");
    }else{      // If n is even and greater than 20, print Not Weird
      process.stdout.write("Not Weird");
    }
  }      
}