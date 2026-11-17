class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const leng = nums.length

        var totals = new Map()

        for (var n of nums) {
            if (totals.has(n)) {
                const curr = totals.get(n)
                totals.set(n, curr + 1)
            } else {
                totals.set(n, 1)
            }
        }

        var buckets = Array.from({ length: leng + 1 }, () => new Set());

        for (var key of totals.keys()) {
            const val = totals.get(key)
            buckets[val].add(key)
        }

        var result = new Array()
        var buck = leng

        for (var count = 0; count < k; count++) {
            while (buckets[buck].size == 0) {
                buck--
            }

            var curr = buckets[buck].values().next().value;
            result.push(curr)
            buckets[buck].delete(curr)
        }

        return result
    }
}
