/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
    let n = startTime.length;
    let jobs = [];
    for(let i = 0; i < n; i++){
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort((a, b) => a[1] - b[1]);
    let dp = Array(n).fill(0);
    dp[0] = jobs[0][2];
    for(let i = 1; i < n; i++){
        let l = -1;
        let r = i - 1;
        while(l < r){
            let mid = Math.floor((l + r + 1) / 2);
            if(jobs[mid][1] <= jobs[i][0]){
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        if(r != -1){
            dp[i] = Math.max(dp[i - 1], jobs[i][2] + dp[r]);
        } else {
            dp[i] = Math.max(dp[i - 1], jobs[i][2]);
        }
    }
    return dp[n - 1];
}
