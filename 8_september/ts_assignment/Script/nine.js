"use strict";
var _a;
function Translate(sentence) {
    let newLang = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == " ") {
            newLang = newLang + sentence[i];
        }
        else if (sentence[i] != 'a' && sentence[i] != 'e' && sentence[i] != 'i' && sentence[i] != 'o' && sentence[i] != 'u') {
            newLang = newLang + sentence[i] + 'o' + sentence[i];
        }
        else {
            newLang = newLang + sentence[i];
        }
    }
    return newLang;
}
const translate_sent = (Translate("this is fun"));
(_a = document.getElementById("nine")) === null || _a === void 0 ? void 0 : _a.innerText = translate_sent;
