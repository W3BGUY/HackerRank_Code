// require Node.js for easier running in terminal
var fs=require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(row){
  if(!row){return;}
  
  /* Do Something */
});