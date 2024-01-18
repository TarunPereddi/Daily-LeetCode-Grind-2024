public class Solution {
    public int findContentChildren(int[] g, int[] s) {
        // Sort arrays to make the matching process efficient
        Arrays.sort(g);
        Arrays.sort(s);

        int count = 0;
        int cookieIndex = 0;

        // Iterate through each child's greed factor
        for (int i = 0; i < g.length; i++) {
            // Try to find a suitable cookie for the current child
            while (cookieIndex < s.length && s[cookieIndex] < g[i]) {
                cookieIndex++;
            }

            // If a suitable cookie is found, increment count
            if (cookieIndex < s.length) {
                count++;
                cookieIndex++;
            }
        }

        return count;
    }
}