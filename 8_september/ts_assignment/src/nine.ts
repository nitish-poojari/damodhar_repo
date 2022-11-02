function Translate(sentence: string): string {
    let newLang = ''
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == " ") {
            newLang = newLang + sentence[i]
        }
        else if (sentence[i] != 'a' && sentence[i] != 'e' && sentence[i] != 'i' && sentence[i] != 'o' && sentence[i] != 'u') {

            newLang = newLang + sentence[i] + 'o' + sentence[i]
        }
        else {
            newLang = newLang + sentence[i]
        }
    }
    return newLang
}
const translate_sent=(Translate("this is fun"))
document.getElementById("nine")?.innerText=translate_sent;