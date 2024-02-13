class Solution {
    public String firstPalindrome(String[] words) {
        for(int str = 0; str < words.length; str++){
            if (isPalindrome(words[str])){
                return words[str];
            }
        }
        return "";
    }
    public boolean isPalindrome(String str){
        if(str== null || str.length() == 0){
            return false;
        }
        for(int i = 0; i < str.length()/2; i++){
            char start = str.charAt(i);
            char end = str.charAt(str.length() - 1 - i);

            if(start != end){
                return false;
            }
        }
        return true;
    }
}