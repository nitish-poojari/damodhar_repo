// Replace single element ‘b’ in given list ['a', 'b', 'c', 'd', 'e'] with [1, 2, 3]
const list1:any=['a', 'b', 'c', 'd', 'e']

function change_element(list:any,char?:string){
    for(let a:any=0;a<list1.length;a++){
        if(list1[a]==char){
            list1.splice(a,1,[1,2,3])
        }
    }
    return (list1)
}
const change=change_element(list1,'b')
document.getElementById("thirteen")?.innerHTML=change

