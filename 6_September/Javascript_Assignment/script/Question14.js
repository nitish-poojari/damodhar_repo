const n = 20
let tag=document.createElement("p");
let prime=2;
let flag1= document.getElementById("fourteen").innerHTML
function showPrimeNumbers(b){
    for (i = 1; i <= b; i++) {         
        if (i == 1 || i == 0)
            continue
        flag = 1
        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1)
            // prime=i;
            document.write(`Prime : ${i} <br>`);
        //    tag.appendChild(prime)
        //     flag1.appendChild(tag);
    }
}

// showPrimeNumbers(20)
// const flag1= showPrimeNumbers(20)
// document.getElementById("fourteen").innerHTML=flag1