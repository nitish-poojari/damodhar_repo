
        // 13)Write a function which Calculate the sum of marks provided in an array, average it and also show Grade
        //     Grade criteria/mechanism is:
        //     0% to 70% = > D Grade
        //     71% to 79% => C Grade
        //     81% to 89% => B Grade
        //     91% to 100% => A Grade
        //     const marks = [55, 85, 55, 65];
        // code start

        const marks = [55, 85, 55, 65];
        function show_grade(){           
            let sum=0
            let avg=0
            for(let i=0;i<marks.length;i++){
                sum += marks[i];
                avg=sum/marks.length
            }
            console.log("Average = ",avg);
            if(avg==91 && avg<=100){
                document.getElementById('thirteen').innerHTML="A Grade"
            }
            else if(avg==81 && avg<=89){
                document.getElementById('thirteen').innerHTML= "B Grade"
            }
            else if(avg==71 && avg<=79){
                document.getElementById('thirteen').innerHTML="C Grade"
            }else{
                document.getElementById('thirteen').innerHTML="D Grade"
            }   
        }
        
      
