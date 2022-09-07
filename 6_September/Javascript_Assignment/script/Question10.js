//10) Write a function which checks number till given input/parameter is odd or even
            function odd_even(A){
                if (A%2==0){
                    return "Given Number is Even"
                }else{
                    return "Given Number is Odd"          
                      }
            }
            // const number_check=odd_even(11)
            const number_check= odd_even(100)
            document.getElementById('ten').innerHTML=number_check
            