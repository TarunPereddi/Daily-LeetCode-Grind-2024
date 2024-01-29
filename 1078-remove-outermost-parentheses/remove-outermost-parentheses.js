/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let openCount = 0;
    let output = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (openCount) output += s[i];
            openCount++;
        }
        else if (s[i] === ")") {
            openCount--;
            if (openCount) output += s[i];
        }
    }
    return output;
};