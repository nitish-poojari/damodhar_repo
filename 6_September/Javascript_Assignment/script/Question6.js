 // 6) create a function to swap two parameters
        function Swap_number(n1,n2){
            console.log("before Swapping " + "n1 = "+ n1  + " n2 = "+ n2)
            n1=n1+n2
            n2=n1-n2
            n1=n1-n2
            //console.log("After Swapping " + "n1 = "+ n1  + " n2 = "+ n2)
            return n1,n2
        }
        const swap=Swap_number(10,20)
        document.getElementById('main').innerHTML=swap