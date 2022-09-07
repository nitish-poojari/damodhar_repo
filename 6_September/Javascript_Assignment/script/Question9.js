 // 9) Write a function which checks given input/parameter:
            // If input/parameter is divisible by 3 print => Fizz
            // If input/parameter is divisible by 5 print => Buzz
            // If input/parameter is divisible by 3 or 5 print => FizzBuzz
            // input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
            // If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input Number            
            // code start

            function check_number(num){
                if(num%3==0){
                    return "Fizz"
                }
                else if(num%5==0){
                    return "Buzz"
                }
                else if(num%3 ==0 && num%5 ==0){
                    return "FizzBuzz"
                }
                else if(num%3 !==0 && num%5 !==0){
                    return num
                }
                else{
                    return "Nan Not a Number"
                }

            }
            // check_number(10)
            // check_number(30)
            // check_number(11)
            const check1=check_number(9)
            document.getElementById('nine').innerHTML=check1
            

