/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// test case 1
// let nums = [3, 2, 2, 3];
// let val = 3;

// test case 2
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

// test case 3
// let nums = [3,1,3,3,3];
// let val = 3;

console.log(removeElement(nums, val));
