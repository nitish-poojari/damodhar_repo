"use strict";
var _a;
// 11)Write a program to Interchange First and Last Element of a List
const list = ["Ram", 1, 2, 3, "sham"];
// console.log("before swap",list)
function interchange(list) {
    let temp = list[0];
    list[0] = list[list.length - 1];
    list[list.length - 1] = temp;
    return list;
}
const swap = interchange(list);
(_a = document.getElementById("eleven")) === null || _a === void 0 ? void 0 : _a.innerHTML = swap;
