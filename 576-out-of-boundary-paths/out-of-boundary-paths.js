/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(maxMove + 1).fill(null)));
    const mod = 1000000007;

    function helper(maxMove, x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] !== null) return dp[x][y][maxMove];
        
        let res = 0;
        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;
        dp[x][y][maxMove] = res;
        return res;
    }

    return helper(maxMove, startRow, startColumn);
};
