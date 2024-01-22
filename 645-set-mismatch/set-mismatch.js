var findErrorNums = function(nums) {
    let len = nums.length;
    let sum = (len * (len + 1)) / 2;
    let sumOfNums = nums.reduce((a, b) => a + b);
    let uniqueSum = [...new Set(nums)].reduce((a, b) => a + b);
    
    let duplicate = sumOfNums - uniqueSum;
    let missing = sum - uniqueSum;
    
    return [duplicate, missing];
};
