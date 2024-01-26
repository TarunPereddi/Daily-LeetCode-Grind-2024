class Solution {
public:
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        vector<vector<vector<int>>> dp(m, vector<vector<int>>(n, vector<int>(maxMove + 1, -1)));
        const int mod = 1000000007;

        function<int(int, int, int)> helper = [&](int x, int y, int maxMove) -> int {
            if (x < 0 || x >= m || y < 0 || y >= n) return 1;
            if (maxMove <= 0) return 0;
            if (dp[x][y][maxMove] != -1) return dp[x][y][maxMove];

            int res = 0;
            res = (res + helper(x + 1, y, maxMove - 1)) % mod;
            res = (res + helper(x, y - 1, maxMove - 1)) % mod;
            res = (res + helper(x - 1, y, maxMove - 1)) % mod;
            res = (res + helper(x, y + 1, maxMove - 1)) % mod;
            dp[x][y][maxMove] = res;
            return res;
        };

        return helper(startRow, startColumn, maxMove);
    }
};
