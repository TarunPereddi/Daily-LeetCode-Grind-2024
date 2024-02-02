/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = gain[0];

    for(let i = 1; i < gain.length; i++){
        gain[i] = gain[i-1] + gain[i];
        result = Math.max(result,gain[i]);
    }
    return result > 0 ? result : 0;
};