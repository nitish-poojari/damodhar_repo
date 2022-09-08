// 3) Complete the following function called validator, that takes an optional function argument. It caches the response and return it when there's.
interface CustomResponse {
    valid: boolean
    error: string
}
   class MyValidator implements CustomResponse{
       valid: boolean
       error: string

       constructor(valid:boolean=false,error:string='') {
        this.error=error;
        this.valid=valid;
       }
        errorResponse = (): CustomResponse => {
        return { valid: false, error: 'error occurred' }
       }
       validator = (func?:any):any=>{
        return func=this.errorResponse();
       }
   }
const Myobj=new MyValidator();
const mayobj_valid=(Myobj.validator(() => Myobj.errorResponse()).valid)
document.getElementById("third").innerHTML=mayobj_valid
const err=(Myobj.validator().error)
document.getElementById("third1").innerHTML=err


   