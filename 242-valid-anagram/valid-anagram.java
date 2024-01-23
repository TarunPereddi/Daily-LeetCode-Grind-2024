class Solution {
   public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> frequencyMap = new HashMap<>();

        // Increment frequency for characters in string s
        for (char c : s.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }

        // Decrement frequency for characters in string t
        for (char c : t.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) - 1);

            // If the frequency becomes negative, it means the strings are not anagrams
            if (frequencyMap.get(c) < 0) {
                return false;
            }
        }

        // Check if all frequencies are zero, indicating the strings are anagrams
        for (int freq : frequencyMap.values()) {
            if (freq != 0) {
                return false;
            }
        }

        return true;
    }

}