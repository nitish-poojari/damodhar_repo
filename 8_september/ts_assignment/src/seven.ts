class Course{
    courseName:string;
    courseLength:number;
    courseFees:number;
    constructor(courseName:string='',courseLength:number=0,courseFees:number=0){
        this.courseName=courseName;
        this.courseLength=courseLength;
        this.courseFees=courseFees;
    }
    AcceptData(cName:string,cLength:number,cFees:number){
        this.courseName=cName;
        this.courseLength=cLength;
        this.courseFees=cFees;
    }
    PrintData(){
        document.write(` Course Name is : ${this.courseName} \n\n Course Length is : ${this.courseLength} \n\n Course Fees is : ${this.courseFees}`);
    }
    
}
class Computer extends Course{
    subjects={
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:''
    }
    AcceptDataForComputer(s1:string,s2:string,s3:string,s4:string){
        this.subjects.sub1=s1;
        this.subjects.sub2=s2;
        this.subjects.sub3=s3;
        this.subjects.sub4=s4;
    }
    PrintData(): any {
        console.log(`
        Subjects in this Course are : ${this.subjects.sub1},${this.subjects.sub2},${this.subjects.sub3},${this.subjects.sub4},`)
    }
}
class Electronics extends Course{
    subject1={
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:''
    }
    AcceptDataForElectronics(s1:string,s2:string,s3:string,s4:string){
        this.subject1.sub1=s1;
        this.subject1.sub2=s2;
        this.subject1.sub3=s3;
        this.subject1.sub4=s4;
    }
    PrintData(): any {
        console.log(`
        Subjects in this Course are : ${this.subject1.sub1},${this.subject1.sub2},${this.subject1.sub3},${this.subject1.sub4},`)
    }
}

const cObj=new Course();
cObj.AcceptData('Computer',4,160000);
cObj.PrintData();