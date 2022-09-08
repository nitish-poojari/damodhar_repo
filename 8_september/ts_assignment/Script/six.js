"use strict";
let n = 10;
function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}
function main1(n) {
    for (let i = 1; i <= n; i++) {
        // console.log(fact(i))
        document.write(fact(i) + "<br>");
    }
}
