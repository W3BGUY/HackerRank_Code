/*
 * Objective 
 * In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!
 * 
 * Task 
 * Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
 * 
 * Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!
 * 
 * Input Format
 * 
 * There are  lines of numeric input: 
 * The first line has a double,  (the cost of the meal before tax and tip). 
 * The second line has an integer,  (the percentage of  being added as tip). 
 * The third line has an integer,  (the percentage of  being added as tax).
 * 
 * Output Format
 * 
 * Print the total meal cost, where  is the rounded integer result of the entire bill ( with added tax and tip).
 * 
 * Sample Input
 * 
 * 12.00
 * 20
 * 8
 * Sample Output
 * 
 * 15
 * Explanation
 * 
 * Given: 
 * , , 
 * 
 * Calculations: 
 *  
 *  
 *  
 * 
 * We round  to the nearest dollar (integer) and then print our result, .
*/;

const meal_cost=parseFloat(12.00);
const tip_percent=parseInt(20,10);
const tax_percent=parseInt(8,10);
solve(meal_cost,tip_percent,tax_percent);

function solve(meal_cost,tip_percent,tax_percent){
  var totalTip=parseFloat(meal_cost*(tip_percent/100)).toFixed(2);
  //console.log(totalTip);
  var totalTax=parseFloat(meal_cost*(tax_percent/100)).toFixed(2);
  //console.log(totalTax);
  var totalCost=Math.round(parseFloat(parseFloat(meal_cost)+parseFloat(totalTip)+parseFloat(totalTax)));
  //console.log(totalCost);
  process.stdout.write(totalCost.toString());
}