let num1:number=10;
function fact(num1:number):any{
    if(num1==0){
        return 1;
    }
    return num1*fact(num1-1)
}
function main1(n:number){
    for(let i=1;i<=num1;i++){
        // console.log(fact(i))
         document.write(fact(i) +"<br>")
    }
}
