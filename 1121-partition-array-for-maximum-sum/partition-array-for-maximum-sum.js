/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const N = arr.length;
        const K = k + 1;

        const dp = Array(K).fill(0);

        for (let start = N - 1; start >= 0; start--) {
            let currMax = 0;
            const end = Math.min(N, start + k);

            for (let i = start; i < end; i++) {
                currMax = Math.max(currMax, arr[i]);
                dp[start % K] = Math.max(dp[start % K], dp[(i + 1) % K] + currMax * (i - start + 1));
            }
        }
        return dp[0];
};