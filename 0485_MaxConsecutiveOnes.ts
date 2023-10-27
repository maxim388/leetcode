// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


function findMaxConsecutiveOnes(nums: number[]): number {
  let currentStreak = 0;
  let maxStreak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      currentStreak += 1;
    } else {
      currentStreak = 0;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
  }
  return maxStreak;
}
