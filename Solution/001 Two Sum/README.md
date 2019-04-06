https://leetcode.com/problems/two-sum/
# 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```javascript
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution
题意是从给定的数组中找到两个元素和为指定值的索引，最简单的就是暴力直接遍历两次数组，复杂度为`O(n^2)`。利用HashMap做存储，key为值，value为索引，查找时先判断有无指定值减去当前值，若无则添加到HashMap中，复杂度`O(n)`
