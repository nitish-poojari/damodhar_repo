//11)Write a function which Calculate the sum of multiples of 3 and 5 for a given limit.
function multiples_of(num){
    sum=0
    for(i=0;i<=num;i++){
        if(i%3==0 || i%5==0){
            sum=sum+i
        }       
    } 
    return sum  
}
const all_sum= multiples_of(10)
document.getElementById('eleven').innerHTML=all_sum
