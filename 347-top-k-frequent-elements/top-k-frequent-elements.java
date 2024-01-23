class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if(nums.length == 1) return nums;

        int[] bucketPos = new int[10_000 + 1];
        int[] bucketNeg = new int[10_000 + 1];
        for(int n: nums) {
            if(n >=0 ) bucketPos[n]++;
            else bucketNeg[-n]++;
        }
        ArrayList<Integer>[] bucketSorted = new ArrayList[nums.length+1];
        for(int i=0; i<bucketPos.length; i++) {
            if(bucketPos[i] > 0) {
                if(bucketSorted[bucketPos[i]] == null) bucketSorted[bucketPos[i]] = new ArrayList<>();
                bucketSorted[bucketPos[i]].add(i);
            }
            if(bucketNeg[i] > 0) {
                if(bucketSorted[bucketNeg[i]] == null) bucketSorted[bucketNeg[i]] = new ArrayList<>();
                bucketSorted[bucketNeg[i]].add(-i);
            }
        }
        int[] res = new int[k];
        int r=0;
        for(int i=bucketSorted.length-1; i >= 0; i--) {
            if(bucketSorted[i] == null) continue;
            for(int n: bucketSorted[i]) {
                res[r++] = n;
                if(r == k) break;
            }
                if(r == k) break;
        }
        return res;
    }
}