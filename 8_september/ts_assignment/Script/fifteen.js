"use strict";
var _a;
// Accept the full name from user(Name Middlename Surname) in lowercase and Print it in title case.
// NOTE:(Using in-built function)
function username(fname) {
    let name = fname.toUpperCase();
    return name;
}
const fullname = username("damodhar jadhao");
(_a = document.getElementById("fifteen")) === null || _a === void 0 ? void 0 : _a.innerHTML = fullname;
