"use strict";
var _a;
// 14)write a program to find index of element ‘e’ in given vowels list ['a', 'e', 'i', 'o', 'i', 'u']
const vowels = ['a', 'e', 'i', 'o', 'i', 'u'];
function find() {
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] == 'e') {
            return i;
        }
    }
}
const find_char = find(vowels);
(_a = document.getElementById("fourteen")) === null || _a === void 0 ? void 0 : _a.innerHTML = find_char;
