// 11)Write a program to Interchange First and Last Element of a List
const list:any=["Ram",1,2,3,"sham"]
function interchange(list:any){
let temp=list[0]
list[0]=list[list.length-1]
list[list.length-1]=temp
return list
}
const swap:any=interchange(list)
document.getElementById("eleven")?.innerHTML=swap
