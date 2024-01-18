/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // Sort arrays to make the matching process efficient
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let count = 0;
    let cookieIndex = 0;

    // Iterate through each child's greed factor
    for (let i = 0; i < g.length; i++) {
        // Try to find a suitable cookie for the current child
        while (cookieIndex < s.length && s[cookieIndex] < g[i]) {
            cookieIndex++;
        }

        // If a suitable cookie is found, increment count
        if (cookieIndex < s.length) {
            count++;
            cookieIndex++;
        }
    }

    return count;
};
