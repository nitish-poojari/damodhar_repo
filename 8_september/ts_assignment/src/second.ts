// 2)Create an arrow function that takes an object with default values. Here're the interface and
// expected results
interface Params {
    firstParam?: string
    secondParam?: string
   }
class MyClass implements Params{
    firstParam: string
    secondParam: string
    constructor(firstParam:string='defaultFirst' , secondParam:string='defaultSecond'){
        this.firstParam=firstParam;
        this.secondParam=secondParam;
       }
    myFunc=(obj?:MyClass)=>{
            return(`${obj?.firstParam} ${obj?.secondParam}`);
    }
 }
const obj=new MyClass();
const Obj1=new MyClass();
const main:any=obj.myFunc(Obj1);
document.getElementById("second").innerHTML=main



