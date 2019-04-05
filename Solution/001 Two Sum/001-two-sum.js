/*
 * @Author: chenzebiao 
 * @Date: 2019-04-05 14:11:20 
 * @Last Modified by: chenzebiao
 * @Last Modified time: 2019-04-05 17:14:30
 */

/**
 * 暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }

    }
};

/**
 * 利用js的indexOf方法，此方法时间复杂度最大值O(n^2)
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

/**
 * Map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const arrMap = new Map();
    for (const [index, value] of Object.entries(nums)) {
        arrMap.set(value, index);
    }
    for (const [index, value] of Object.entries(nums)) {
        const complement = target - value;
        if (arrMap.has(complement) && arrMap.get(complement) !== index) {
            return [Number(index), Number(arrMap.get(complement))];
        }
    }
};

/**
 * 改进后的Map，在插入新数据前，就可以进行判断
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const arrMap = new Map();
    for (const [index, value] of Object.entries(nums)) {
        const complement = target - value;
        if (arrMap.has(complement)) {
            return [Number(arrMap.get(complement)), Number(index)];
        }
        arrMap.set(value, index);
    }
};

/**
 * 对象存储
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in obj) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
    return null;
};


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
