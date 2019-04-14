/*
 * @Author: chenzebiao 
 * @Date: 2019-04-13 23:54:47 
 * @Last Modified by: chenzebiao
 * @Last Modified time: 2019-04-14 23:59:20
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [];
    const length = nums1.length + nums2.length;

    for (let i = 0, j = 0; i < nums1.length > nums2.length ? nums1.length : nums2.length;) {
        if (!nums1[i] && nums2[j]) {
            arr.push(nums2[j++]);
        } else if (nums1[i] && !nums2[j]) {
            arr.push(nums1[i++]);
        } else if (nums1[i] && nums2[j]) {
            if (nums1[i] > nums2[j]) {
                arr.push(nums2[j++]);
            } else {
                arr.push(nums1[i++]);
            }
        }

        if (arr.length >= parseInt(length / 2)) {
            const num1 = nums1[i] || 0;
            const num2 = nums2[j] || 0;
            arr.push(num1 || num2 || num1 > num2 ? num2 : num1);
            const isDouble = parseInt(length / 2) >= length / 2;
            if (arr.length === 2 && arr[1] === 0) {
                return arr[0];
            }
            if (isDouble) {
                return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
            } else {
                return arr[arr.length - 1];
            }
        }
    }
};

// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2));

// const nums1 = [1, 2];
// const nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2));

// const nums1 = [2];
// const nums2 = [];
// console.log(findMedianSortedArrays(nums1, nums2));

// const nums1 = [];
// const nums2 = [2, 3];
// console.log(findMedianSortedArrays(nums1, nums2));

const nums1 = [3, 4];
const nums2 = [];
console.log(findMedianSortedArrays(nums1, nums2));
