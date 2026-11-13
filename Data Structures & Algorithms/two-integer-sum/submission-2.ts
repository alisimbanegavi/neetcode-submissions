class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        var diffs = new Map()

        for (var i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (diffs.has(diff)) {
                return [i, diffs.get(diff)]
            }

            diffs.set(nums[i], i)
        }

        return []
    }
}
