/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
 let maxHeight = 0;
  let result = 0;

  for(let i = 0; i <= gain.length; ++i) {
      result += gain[i]
      if(maxHeight < result) {
          maxHeight = result
      }
  }
  
    
  return maxHeight;  
};