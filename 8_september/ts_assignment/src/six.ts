let n:number=10;
function fact(n:number):any{
    if(n==0){
        return 1;
    }
    return n*fact(n-1)
}
function main1(n:number){
    for(let i=1;i<=n;i++){
        // console.log(fact(i))
         document.write(fact(i) +"<br>")
    }
}
