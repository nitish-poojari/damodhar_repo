// Write a python program to print sum of tuple elements
const tuple:any=[11,12,13,14,15,16,17,18];
let sum=0
for (let i=0;i<tuple.length;i++){
    sum +=tuple[i]
}
document.getElementById("twelve")?.innerHTML=sum;