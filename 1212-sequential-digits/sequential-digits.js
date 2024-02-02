/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let sequenceArr = [];
    
    let maxDigit = 123456789;
    let maxString = maxDigit.toString();
    while (maxString.length > 1){
        while (maxDigit > 10) {
         sequenceArr.push(maxDigit);
         maxDigit = Math.trunc(maxDigit/10);
        }
        maxString = maxString.substring(1);
        maxDigit = parseInt(maxString);
    }
    
    sequenceArr.sort((a, b) => a - b);
    sequenceArr = sequenceArr.filter(number => number >= low && number <= high);

    return sequenceArr;

};