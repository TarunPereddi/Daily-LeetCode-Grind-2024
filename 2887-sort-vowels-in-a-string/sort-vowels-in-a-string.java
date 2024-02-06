class Solution {
    public String sortVowels(String s) {
        ArrayList<Character> arr = new ArrayList<Character>();
        for(int i =0; i< s.length(); i++){
            if(isVowel(s.charAt(i))){
                arr.add(s.charAt(i));
            }
        }

        Collections.sort(arr);
        
        String newStr = "";
        int idx = 0;
        for(int i=0; i< s.length(); i++){
            if(isVowel(s.charAt(i))){
                newStr += arr.get(idx);
                idx++;
            }
            else{
                newStr += s.charAt(i);
            }
        }
        return newStr;
    }

    public static boolean isVowel(char a){
        a = Character.toLowerCase(a);
        if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' ){
            return true;
        }
        return false;
    }
}