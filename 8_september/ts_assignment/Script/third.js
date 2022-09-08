"use strict";
class MyValidator {
    constructor(valid = false, error = '') {
        this.errorResponse = () => {
            return { valid: false, error: 'error occurred' };
        };
        this.validator = (func) => {
            return func = this.errorResponse();
        };
        this.error = error;
        this.valid = valid;
    }
}
const Myobj = new MyValidator();
const mayobj_valid = (Myobj.validator(() => Myobj.errorResponse()).valid);
document.getElementById("third").innerHTML = mayobj_valid;
const err = (Myobj.validator().error);
document.getElementById("third1").innerHTML = err;
