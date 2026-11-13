class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) { return false }
        var res = t

        for (var letter of s) {
            res = res.replace(letter, "")
        }

        return res == ""
    }
}
