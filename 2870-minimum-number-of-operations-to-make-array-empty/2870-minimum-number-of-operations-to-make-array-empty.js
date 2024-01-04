/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const counter = new Map();
    for (const num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }
    let ans = 0;
    for (const c of counter.values()) {
        if (c === 1) {
            return -1;
        }
        ans += Math.ceil(c / 3);
    }
    return ans;
};