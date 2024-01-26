class Solution {
public:
    int mod = 1e9+7;
    long long rec(int x, int y, int m, int n, int mov, long long dp[][51][51]){
      if(x<0 || y<0 || x>=m || y>=n) return 1;
      if(mov==0) return 0;
      if(dp[x][y][mov]!=-1) return dp[x][y][mov];
      return dp[x][y][mov] = (rec(x+1,y,m,n,mov-1,dp)%mod + rec(x-1,y,m,n,mov-1,dp)%mod + rec(x,y+1,m,n,mov-1,dp)%mod + rec(x,y-1,m,n,mov-1,dp)%mod)%mod;
    }
    int findPaths(int m, int n, int maxMove, int r, int c) {
      long long dp[m][51][51];
      for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
          for(int k=0;k<=maxMove;k++) dp[i][j][k] = -1;
        }
      }



      return rec(r,c,m,n,maxMove,dp);
        
    }
};