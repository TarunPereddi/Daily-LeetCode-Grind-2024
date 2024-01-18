/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const countMap = new Map();
    
    for (const value of arr) {
        countMap.set(value, (countMap.get(value) || 0) + 1);
    }
    
    return new Set(countMap.values()).size === countMap.size;

};