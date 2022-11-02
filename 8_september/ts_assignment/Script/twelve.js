"use strict";
var _a;
// Write a python program to print sum of tuple elements
const tuple = [11, 12, 13, 14, 15, 16, 17, 18];
let sum = 0;
for (let i = 0; i < tuple.length; i++) {
    sum += tuple[i];
}
(_a = document.getElementById("twelve")) === null || _a === void 0 ? void 0 : _a.innerHTML = sum;
