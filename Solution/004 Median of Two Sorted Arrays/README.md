https://leetcode.com/problems/median-of-two-sorted-arrays/
# 4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:
```javascript
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

Example 2:
```javascript
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## Solution

### first
```
Input [2] []
Output 0.0
Expected 2.0
```
通过给的测试用例，但是提交失败，少考虑了空的情况
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [];
    const length = nums1.length + nums2.length;

    for (let i = 0, j = 0; i < nums1.length > nums2.length ? nums1.length : nums2.length;) {
        if (nums1[i] > nums2[j]) {
            arr.push(nums2[j++]);
        } else {
            arr.push(nums1[i++]);
        }
        if (arr.length >= parseInt(length / 2)) {
            const num1 = nums1[i] || 0;
            const num2 = nums2[j] || 0;
            arr.push(num1 || num2 || num1 > num2 ? num2 : num1);
            const isDouble = parseInt(length / 2) >= length / 2;
            if (isDouble) {
                return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
            } else {
                return arr[arr.length - 1];
            }
        }
    }
};
```

### second
```
Input [] [2,3]
Output NaN
Expected 2.5
```
少考虑了边界问题，数字跟undefined比较一直都是false
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [];
    const length = nums1.length + nums2.length;

    for (let i = 0, j = 0; i < nums1.length > nums2.length ? nums1.length : nums2.length;) {
        if (nums1[i] > nums2[j]) {
            arr.push(nums2[j++]);
        } else {
            arr.push(nums1[i++]);
        }
        if (arr.length >= parseInt(length / 2)) {
            const num1 = nums1[i] || 0;
            const num2 = nums2[j] || 0;
            arr.push(num1 || num2 || num1 > num2 ? num2 : num1);
            const isDouble = parseInt(length / 2) >= length / 2;
            if(arr.length === 2 && arr[1] === 0){
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
```

### third
```
Input [3,4] []
Output 3.0
Expected 3.5
```
```javascript
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
```


### four
```
Input [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22] [0,6]
Output 12.5 
Expected 10.5
```
这种则是没考虑到0的情况，js中0就是false
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [];
    const length = nums1.length + nums2.length;

    for (let i = 0, j = 0; i < nums1.length > nums2.length ? nums1.length : nums2.length;) {
        if (!nums1[i] && nums2[j]) {
            arr.push(nums2[j++]);
        } else if (nums1[i] && !nums2[j]) {
            arr.push(nums1[i++]);
        } else if (nums1[i] && nums2[j]) {
            arr.push(nums1[i] > nums2[j] ? nums2[j++] : nums1[i++]);
        }

        if (arr.length >= parseInt(length / 2)) {
            if (!nums1[i] && nums2[j]) {
                arr.push(nums2[j]);
            } else if (nums1[i] && !nums2[j]) {
                arr.push(nums1[i]);
            } else if (nums1[i] && nums2[j]) {
                arr.push(nums1[i] > nums2[j] ? nums2[j] : nums1[i]);
            }
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
```


### five
这回就通过测试用例了，有待优化
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [];
    const length = nums1.length + nums2.length;

    for (let i = 0, j = 0; i < nums1.length > nums2.length ? nums1.length : nums2.length;) {
        if (nums1[i] === undefined && (nums2[j] || nums2[j] === 0)) {
            arr.push(nums2[j++]);
        } else if ((nums1[i] || nums1[i] === 0) && nums2[j] === undefined) {
            arr.push(nums1[i++]);
        } else if ((nums1[i] || nums1[i] === 0) && (nums2[j] || nums2[j] === 0)) {
            arr.push(nums1[i] > nums2[j] ? nums2[j++] : nums1[i++]);
        }

        if (arr.length >= parseInt(length / 2)) {
            if (nums1[i] === undefined && (nums2[j] || nums2[j] === 0)) {
                arr.push(nums2[j]);
            } else if ((nums1[i] || nums1[i] === 0) && nums2[j] === undefined) {
                arr.push(nums1[i]);
            } else if ((nums1[i] || nums1[i] === 0) && (nums2[j] || nums2[j] === 0)) {
                arr.push(nums1[i] > nums2[j] ? nums2[j] : nums1[i]);
            }
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
```