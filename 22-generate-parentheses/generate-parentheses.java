class Solution {
    public List<String> generateParenthesis(int n) {
        int open = n;
        int close = n;
        List<String> arr = new ArrayList<String>();
        pairs(open,close,arr, "");
        return arr;
    }

    public void pairs(int i, int j, List<String> arr, String s){
        if(i == 0 && j == 0){
            arr.add(s);
            return;
        }
        if(i>0){
            pairs(i-1, j,arr,s+"(");
        }
        if(j>i){
            pairs(i,j-1,arr,s+")");
        }
    }
}