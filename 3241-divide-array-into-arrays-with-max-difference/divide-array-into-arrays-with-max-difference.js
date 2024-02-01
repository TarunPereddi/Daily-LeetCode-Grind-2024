var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const size = 3;
    const result = [];

    for (let i = 0; i <= nums.length - size; i += size) {
        if (nums[i + size - 1] - nums[i] <= k) {
            result.push(nums.slice(i, i + size));
        } else {
            return [];
        }
    }

    return result;
};
