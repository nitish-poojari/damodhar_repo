function Pangram(str:string){
    let main_str='abcdefghijklmnopqrstuvwxyz';
    str=str.toLowerCase();
    let count=0;
    for(let i=0;i<main_str.length;i++){
        for(let j=0;j<str.length;j++){
            if(main_str.charAt(i)==str.charAt(j)){
                count+=1;
                break;
            }
        }
    }
    if(count==26){
        return(`The String "${str}" is a Pangram String`);
    }
    else{
        return(`The String "${str}" is NOT a Pangram String`);
    }
}
const check_str= Pangram('The quick brown fox jumps over the lazy dog');
document.getElementById("eight")?.innerText=check_str;