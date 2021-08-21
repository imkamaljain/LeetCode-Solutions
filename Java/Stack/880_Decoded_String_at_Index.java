class Solution {
    public String decodeAtIndex(String S, int K) {
        int n = S.length();
        long size = 0;
        for (int i = 0; i < n; i++) {
            if (Character.isDigit(S.charAt(i))) size *= (S.charAt(i) - '0');
            else size++;
        }
        for (int i = n - 1; i >= 0; i--) {
            K %= size;
            if (K == 0 && Character.isAlphabetic(S.charAt(i))) return (String)
            "" + S.charAt(i);
            if (Character.isDigit(S.charAt(i))) size /= (S.charAt(i) - '0');
            else size--;
        }
        return null;
    }
}