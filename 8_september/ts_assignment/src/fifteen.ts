// Accept the full name from user(Name Middlename Surname) in lowercase and Print it in title case.
// NOTE:(Using in-built function)
function username(fname:string){
    let name=fname.toUpperCase()
    return name
}
const fullname=username("damodhar jadhao")
document.getElementById("fifteen")?.innerHTML=fullname