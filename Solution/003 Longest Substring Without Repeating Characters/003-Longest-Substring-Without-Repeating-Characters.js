/*
 * @Author: chenzebiao 
 * @Date: 2019-04-10 23:26:21 
 * @Last Modified by: chenzebiao
 * @Last Modified time: 2019-04-12 23:52:17
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const strMap = new Map();
    let max = 0;
    for (let j = 0, i = 0; j < s.length; j++) {
        if (strMap.get(s.charAt(j))) {
            i = Math.max(strMap.get(s.charAt(j)), i);
        }
        max = Math.max(max, j - i + 1);
        strMap.set(s.charAt(j), j + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
