class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
    std::unordered_map<int, int> countMap;

    // Count occurrences of each value in the array
    for (int value : arr) {
        countMap[value]++;
    }

    // Check if the number of occurrences is unique
    std::unordered_set<int> occurrenceSet;
    for (const auto& entry : countMap) {
        int occurrences = entry.second;

        // If the occurrences are not unique, return false
        if (!occurrenceSet.insert(occurrences).second) {
            return false;
        }
    }

    // If all occurrences are unique, return true
    return true;
        
    }
};