let bike = {
  model: 'marin',
  wheels: 2,
  speed: 12,
  authorizedBikers: ['Beatrice', 'Alan'],
  hasHadAccident: false,
};
function getBikeSpeed() {
  //your code here
   return bike.speed;
}
//open your browser console to check the results
console.log('result:', getBikeSpeed());
 
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = getBikeSpeed;
}
