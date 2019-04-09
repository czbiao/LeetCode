https://leetcode.com/problems/add-two-numbers/
# 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
```javascript
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## Solution


#### 第一次提交
```
Input: [5] [5]
Output: [0]
Expected: [0,1]
```
少考虑了单个的情况
```javascript
var addTwoNumbers = function (l1, l2) {
    let num = 0;
    let listNode = new ListNode(0);
    let l3 = listNode;
    while (l1 && l2) {
        const node = new ListNode(l1.val + l2.val + num);
        if (node.val >= 10) {
            num = 1;
            node.val = node.val - 10;
        } else {
            num = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
        l3.val = node.val;
        if(l1 && l2) l3.next = node;
        l3 = l3.next;
    }
    return listNode;
};
```


#### 第二次提交
```
Input: [1,8] [0]
Output: [1]
Expected: [1,8]
```
未考虑到不同长度，坑了，题目没讲清楚，继续修改
```javascript
var addTwoNumbers = function (l1, l2) {
    let num = 0;
    let listNode = new ListNode(0);
    let l3 = listNode;
    while (l1 && l2) {
        const node = new ListNode(l1.val + l2.val + num);
        if (node.val >= 10) {
            num = 1;
            node.val = node.val - 10;
        } else {
            num = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
        l3.val = node.val;
        if(l1 && l2) {
            l3.next = node;
        } else if (num){
            l3.next = new ListNode(num);
        }
        l3 = l3.next;
    }
    return listNode;
};
```

#### 第三次提交
总算是通过了，再看看能不能优化
```
Runtime: 144 ms, faster than 42.74% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 38 MB, less than 94.82% of JavaScript online submissions for Add Two Numbers.
```
```javascript
var addTwoNumbers = function (l1, l2) {
    let num = 0;
    let listNode = new ListNode(0);
    let l3 = listNode;
    while (l1 || l2) {
        const node = new ListNode((l1 && l1.val || 0 ) + (l2 && l2.val || 0) + num);
        if (node.val >= 10) {
            num = 1;
            node.val = node.val - 10;
        } else {
            num = 0;
        }
        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
        l3.val = node.val;
        if (l1 || l2) {
            l3.next = node;
        } else if (num) {
            l3.next = new ListNode(num);
        }
        l3 = l3.next;
    }
    return listNode;
};
```