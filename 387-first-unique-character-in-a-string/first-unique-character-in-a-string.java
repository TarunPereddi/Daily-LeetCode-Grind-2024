class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> freqMap = new HashMap<>();
        
        // Count character frequencies
        for (char c : s.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        }
        
        // Find the first unique character
        for (int i = 0; i < s.length(); ++i) {
            if (freqMap.get(s.charAt(i)) == 1) {
                return i;
            }
        }
        
        // If no unique character is found
        return -1;
    }
}