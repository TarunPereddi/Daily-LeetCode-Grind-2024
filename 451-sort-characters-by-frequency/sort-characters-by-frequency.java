class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> fq = new HashMap<>();

        for(char c : s.toCharArray()){
            fq.put(c,fq.getOrDefault(c,0)+1);
        }

        ArrayList<Map.Entry<Character, Integer>> arr = new ArrayList<>(fq.entrySet());

        arr.sort((a,b)->b.getValue().compareTo(a.getValue()));
        String str = "";
        for(Map.Entry<Character,Integer> x: arr){
            char character = x.getKey();
            int frequency = x.getValue();

            str += String.valueOf(character).repeat(frequency);
        }

        return str;

    }
}