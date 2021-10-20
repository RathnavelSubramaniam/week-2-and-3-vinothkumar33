function add(x,y) {
  //your code goes down here
  Z = x+y;
  return Z;
}
 
//open the browser console to check results
console.log('results: ', add(3, 2));
 
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = add;
}
