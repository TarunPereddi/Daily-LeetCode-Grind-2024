/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let count = Array(26).fill(0);
    let i = 0;

    while (i < s.length) {
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        i++;
    }

    let ans = 0;
    i = 0;

    while (i < 26) {
        ans += Math.max(0, count[i]);
        i++;
    }

    return ans;
};

