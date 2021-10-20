/*
Instructions
Create a conditional that checks if you&#39;re old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values
*/
let response;
let age = 15;
// Add your code here
function isOldEnoughToVote(age) {
  if(age>=18)
  {
    response='Eligible to vote';
  }
  else
   {
     response='Not Eligible to vote';
    }
  //your code goes here
  // return true or false based on the age
  
  return response;
}
//open the browser console to check results
console.log('results:', isOldEnoughToVote());
// Don&#39;t edit the code below here
if (typeof module!=='undefined') {
  module.exports = isOldEnoughToVote;
}
