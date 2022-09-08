"use strict";
var _a;
function Pangram(str) {
    let alfa = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < alfa.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (alfa.charAt(i) == str.charAt(j)) {
                count += 1;
                break;
            }
        }
    }
    if (count == 26) {
        return (`The String "${str}" is a Pangram String`);
    }
    else {
        return (`The String "${str}" is NOT a Pangram String`);
    }
}
const check_str = Pangram('The quick brown fox jumps over the lazy dog');
(_a = document.getElementById("eight")) === null || _a === void 0 ? void 0 : _a.innerText = check_str;
