/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const n1 = text1.length;
    const n2 = text2.length;
    let prev = Array(n2+1).fill(0);
    let curr = Array(n2+1).fill(0);
    for(let i=0; i<=n2; i++){
        prev[i] = 0;
    }

    for(let i=1; i<=n1; i++){
        for(let j=1; j<=n2; j++){
            if(text1.charAt(i-1) === text2.charAt(j-1)){
                curr[j] = 1 + prev[j-1];
            }else{
                curr[j] = Math.max(prev[j], curr[j-1]);
            }
        }
        prev = [...curr];
    }
    return prev[n2];
};