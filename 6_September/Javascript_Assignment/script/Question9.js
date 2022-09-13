 // 9) Write a function which checks given input/parameter:
            // If input/parameter is divisible by 3 print => Fizz
            // If input/parameter is divisible by 5 print => Buzz
            // If input/parameter is divisible by 3 or 5 print => FizzBuzz
            // input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
            // If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input Number            
            // code start

            function check_number(num){
                if(num%3==0){
                    document.getElementById('nine').innerHTML="Fizz"
                }
                else if(num%5==0){
                    document.getElementById('nine').innerHTML="Buzz"
                }
                else if(num%3 ==0 && num%5 ==0){
                    document.getElementById('nine').innerHTML= "FizzBuzz"
                }
                else if(num%3 !==0 && num%5 !==0){
                    document.getElementById('nine').innerHTML= num
                }
                else{
                    document.getElementById('nine').innerHTML= "Nan Not a Number"
                }

            }
          
            

