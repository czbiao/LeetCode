/*
 * @Author: chenzebiao 
 * @Date: 2019-04-07 23:22:40 
 * @Last Modified by: chenzebiao
 * @Last Modified time: 2019-04-09 23:47:20
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num = 0;
    let listNode = new ListNode(0);
    let l3 = listNode;
    while (l1 || l2) {
        const node = new ListNode((l1 && l1.val || 0) + (l2 && l2.val || 0) + num);
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

/**
 * 显示节点
 * 2 -> 4 -> 3
 * @param {ListNode} ln 
 */
function display(ln) {
    const val = [];
    while (ln) {
        val.push(ln.val);
        ln = ln.next;
    }
    console.log(val.join(' -> '));
}

const l11 = new ListNode(2);
const l12 = new ListNode(4);
l11.next = l12;
const l13 = new ListNode(3);
l12.next = l13;
display(l11);
const l21 = new ListNode(5);
const l22 = new ListNode(6);
l21.next = l22;
const l23 = new ListNode(4);
l22.next = l23;
display(l21);
const listNode = addTwoNumbers(l11, l21);
display(listNode);


// const l1 = new ListNode(5);
// const l2 = new ListNode(5);
// const listNode = addTwoNumbers(l1, l2);
// display(listNode);

// const l1 = new ListNode(1);
// const l11 = new ListNode(8);
// l1.next = l11;
// const l2 = new ListNode(0);
// const listNode = addTwoNumbers(l1, l2);
// display(listNode);