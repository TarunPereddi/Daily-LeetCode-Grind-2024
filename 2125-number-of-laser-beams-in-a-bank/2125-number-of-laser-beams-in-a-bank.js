/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev = 0, ans = 0;
    
    for (let s of bank) {
        let count = 0;
        for (let c of s) {
            if (c === '1') {
                count++;
            }
        }
        if (count !== 0) {
            ans += (prev * count);
            prev = count;
        }
    }
    
    return ans;
};
