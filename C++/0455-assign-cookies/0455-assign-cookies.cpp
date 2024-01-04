class Solution {
    public:
        int findContentChildren(vector<int>& g, vector<int>& s) {
            int ans = 0;
    
            // Check if either array is empty
            if (g.empty() || s.empty()) {
                return 0;
            }
    
            // Sort arrays to make the matching process efficient
            sort(g.begin(), g.end());
            sort(s.begin(), s.end());
    
            int gi = 0;
            int si = 0;
    
            // Iterate through each child's greed factor
            for (int child : g) {
                // Try to find a suitable cookie for the current child
                while (si < s.size() && s[si] < child) {
                    si++;
    
                    // All cookies are content
                    if (si >= s.size()) {
                        return ans;
                    }
                }
    
                si++;
                ans++;
    
                // All cookies are content
                if (si >= s.size()) {
                    return ans;
                }
            }
    
            return ans;
        }
    };