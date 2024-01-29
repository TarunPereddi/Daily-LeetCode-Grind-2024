/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let start = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count += 1;
        } else {
            count -= 1;
        }

        if (count === 0) {
            result += s.substring(start + 1, i);
            start = i + 1;
        }
    }

    return result;
};