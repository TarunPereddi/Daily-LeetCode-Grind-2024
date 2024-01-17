class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> countMap = new HashMap<>();

        // Count occurrences of each value in the array
        for (int value : arr) {
            countMap.put(value, countMap.getOrDefault(value, 0) + 1);
        }

        // Check if the number of occurrences is unique
        Set<Integer> occurrenceSet = new HashSet<>(countMap.values());

        // If the size of the Set is equal to the size of the Map, all occurrences are unique
        return occurrenceSet.size() == countMap.size();

    }
}