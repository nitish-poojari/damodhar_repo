"use strict";
var _a;
// Replace single element ‘b’ in given list ['a', 'b', 'c', 'd', 'e'] with [1, 2, 3]
const list1 = ['a', 'b', 'c', 'd', 'e'];
function change_element(list, char) {
    for (let a = 0; a < list1.length; a++) {
        if (list1[a] == char) {
            list1.splice(a, 1, [1, 2, 3]);
        }
    }
    return (list1);
}
const change = change_element(list1, 'b');
(_a = document.getElementById("thirteen")) === null || _a === void 0 ? void 0 : _a.innerHTML = change;
