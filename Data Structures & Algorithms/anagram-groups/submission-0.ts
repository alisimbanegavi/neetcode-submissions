class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const res = new Map<string, string[]>();

        for (const s of strs) {
            const counts = this.countChars(alph, s);
            // Serialize the map values into a unique string key (e.g., "1,0,0,0,1...")
            const key = Array.from(counts.values()).join(',');

            if (!res.has(key)) {
            res.set(key, [s]);
            } else {
            res.get(key)!.push(s);
            }
        }

        return Array.from(res.values());
    }

    countChars(alph: string[], s: string): Map<string, number> {
        var alpha = new Map(alph.map(letter => [letter, 0]))

        for (var i = 0; i < s.length ; i++) {
            const count = alpha.get(s[i])
            alpha.set(s[i], count + 1)
        }
        return alpha
    }
}
