"use strict";
class MyClass {
    constructor(firstParam = 'defaultFirst', secondParam = 'defaultSecond') {
        this.myFunc = (obj) => {
            return (`${obj === null || obj === void 0 ? void 0 : obj.firstParam} ${obj === null || obj === void 0 ? void 0 : obj.secondParam}`);
        };
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }
}
const obj = new MyClass();
const Obj1 = new MyClass();
const main = obj.myFunc(Obj1);
document.getElementById("second").innerHTML = main;
