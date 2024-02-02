/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let sequenceArr = [];

    for (let i = 1; i <= 9; i++) {
        let number = i;
        for (let j = i + 1; j <= 9; j++) {
            number = number * 10 + j;
            sequenceArr.push(number);
        }
    }
    sequenceArr.sort((a,b)=>a-b);
    sequenceArr = sequenceArr.filter(number => number >= low && number <= high);

    return sequenceArr;

};