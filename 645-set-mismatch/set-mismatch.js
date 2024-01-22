var findErrorNums = function(nums) {
    let len = nums.length;
    let totalSum = (len * (len + 1)) / 2;
    let totalSumSq = (len * (len + 1) * (2 * len + 1)) / 6;
    let sum = 0, sumSq = 0;

    for(let num of nums) {
        sum += num;
        sumSq += num * num;
    }

    let diff = sum - totalSum;
    let sumDiff = (sumSq - totalSumSq) / diff;

    let duplicate = (diff + sumDiff) / 2;
    let missing = (sumDiff - diff) / 2;

    return [duplicate, missing];
};
