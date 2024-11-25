/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i--) {
    console.log(nums1[i]);
    console.log(i);
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      console.log("if");
      m--;
    } else if (nums1[m - 1] < nums2[n - 1] || m === 0) {
      nums1[i] = nums2[n - 1];
      console.log("else");
      n--;
    } else {
      nums1[i] = nums1[m - 1];
      m--;
    }
  }
  console.log(nums1);
  return nums1;
};

// First Test Case
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// Second Test Case
let nums1 = [0];
let m = 0;
let nums2 = [1];
let n = 1;

console.log(merge(nums1, m, nums2, n));

// Accepted in 13 minutes in Leetcode

// Intuition
// Use of two pointers because we only want to travel the array one time

// Approach
// Talk through inputs/outputs
// Ask questions about constraints
// Think through problem (no code)
// Write for loop, add console logs to see where at, and run in VS Code to keep testing

// Complexity
// - Time complexity:
// O(n + m) because we traverse each array only once

// - Space complexity:
// O(1) because we do not add any new variables