class Solution {
    public int[] findErrorNums(int[] nums) {
        int len = nums.length;
        long totalSum = (long)len * (len + 1) / 2;
        long totalSumSq = (long)len * (len + 1) * (2 * len + 1) / 6;
        long sum = 0, sumSq = 0;

        for(int num : nums) {
            sum += num;
            sumSq += (long)num * num;
        }

        long diff = sum - totalSum;
        long sumDiff = (sumSq - totalSumSq) / diff;

        int duplicate = (int)((diff + sumDiff) / 2);
        int missing = (int)((sumDiff - diff) / 2);

        return new int[]{duplicate, missing};
    }
}
