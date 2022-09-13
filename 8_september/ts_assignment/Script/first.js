"use strict";
// 1) Complete the following MyArray class in TypeScript that can handle string and number only to get the expected results
class MyArray {
    constructor() {
        this.collection = [];
    }
    add(value) {
        this.collection.push(value);
    }
    remove(value) {
        // this.collection.splice(1,1)
        for (let i = 0; i <= this.collection.length; i++) {
            if (value == this.collection[i]) {
                this.collection.splice(i, 1);
            }
        }
    }
    getValues() {
        return this.collection;
    }
}
const stringAry = new MyArray();
stringAry.add('aaa');
stringAry.add('bbb');
stringAry.add('ccc');
stringAry.remove('bbb');
const str = stringAry.getValues();
document.getElementById("first").innerHTML = str;
const numberAry = new MyArray();
numberAry.add(1);
numberAry.add(2);
numberAry.add(3);
numberAry.remove(2);
const num = numberAry.getValues();
document.getElementById("first1").innerHTML = num;
