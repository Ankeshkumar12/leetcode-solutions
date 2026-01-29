// LeetCode 1: Two Sum
// Time: O(n) | Space: O(n)

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
}
