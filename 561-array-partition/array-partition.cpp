class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        vector<int> freq(20001, 0);
        for (int num : nums) {
            freq[num + 10000]++;
        }
        int sum = 0;
        bool odd = true;
        for (int i = 0; i < 20001; ++i) {
            while (freq[i] > 0) {
                if (odd) {
                    sum += i - 10000;
                }
                odd = !odd;
                freq[i]--;
            }
        }
        return sum;
    }
};