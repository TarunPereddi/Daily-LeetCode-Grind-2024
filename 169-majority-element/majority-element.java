class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int majority = 0;

        for (int num : nums) {
            if (count == 0) {
                majority = num;
                count = 1;
            } else if (num == majority) {
                count++;
            } else {
                count--;
            }
        }

        return majority;
    }
}