class BankAccount{
    id:number;
    firstName:string;
    lastName:string;
    address:string;
    phone:string;
    email:string;
    type:string;

    Accounts=[{
        id:0,
        firstName:'',
        lastName:'',
        address:'',
        phone:'',
        email:"",
        type:''
    }];
    constructor(id:number=0,firstName:string="",lastName:string="",address:string=""
    ,phone:string="",email:string="",type:string=""){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.phone=phone;
        this.email=email;
        this.type=type;
    }
    createAccount(id:number,firstName:string,lastName:string,address:string
    ,phone:string,email:string,type:string){
        this.Accounts.push({id,firstName,lastName,address,phone,email,type});
    }
    updateAccount(num:number,val:string){
        for(let i=0;i<this.Accounts.length;i++){
            if(this.Accounts[i].id==num){
                this.Accounts[i].phone=val;
            }
        }
    }
    deleteAccount(num:number){
        for(let i=0;i<this.Accounts.length;i++){
            if(this.Accounts[i].id==num){
                this.Accounts.splice(i,1);
            }
        }
    }
}

const a1=new BankAccount();
a1.createAccount(1,'Damodhar','jadhao','Buldhana','9923064941','damodhar@gmail','Salary');
a1.createAccount(2,'Abc','xyz','Jalna','1234567890','abc@gmail','saving');
a1.createAccount(3,'ram','patil','pune','8999969670','ram@gmail','current');

function showdata1(){
    for(let i=1;i<a1.Accounts.length;i++){
           document.write(a1.Accounts[i].id + '<br>');
           document.write(a1.Accounts[i].firstName + '<br>');
           document.write(a1.Accounts[i].lastName + '<br>');
           document.write(a1.Accounts[i].email + '<br>');
           document.write(a1.Accounts[i].phone + '<br>');
           document.write(a1.Accounts[i].address + '<br>');
           document.write(a1.Accounts[i].type + '<br>');
           document.write("<br>")
    }
}
// const show_all:any=showdata1();
// console.log(show_all);
// document.getElementById("fourth")?.innerHTML=show_all;
class Transaction extends BankAccount{
    data:string
    type:string
    amount:number;
    customerId:string

    constructor(data:string,type:string,amount:number,customerId:string){
        super();
        this.data=data;
        this.type=type;
        this.amount=amount;
        this.customerId=customerId;
    }

    depositeFunds(){

    }
    widrowFunds(){
        
    }
}