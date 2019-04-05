/*
 * @Author: chenzebiao 
 * @Date: 2019-04-05 14:11:20 
 * @Last Modified by: chenzebiao
 * @Last Modified time: 2019-04-05 14:48:10
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
};


const nums = [2, 7, 11, 15];
const target = 13;
console.log(twoSum(nums, target));
