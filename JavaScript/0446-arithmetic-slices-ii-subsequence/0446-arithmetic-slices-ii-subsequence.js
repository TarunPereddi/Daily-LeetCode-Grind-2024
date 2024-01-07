/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const temp = nums[i];
        if (!map.has(temp)) {
            map.set(temp, []);
        }
        map.get(temp).push(i);
    }

    let totalSum = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const a = 2 * nums[i] - nums[j];
            if (map.has(a)) {
                for (const k of map.get(a)) {
                    if (k < i) {
                        dp[i][j] += dp[k][i] + 1;
                    } else {
                        break;
                    }
                }
            }
            totalSum += dp[i][j];
        }
    }

    return totalSum;
};