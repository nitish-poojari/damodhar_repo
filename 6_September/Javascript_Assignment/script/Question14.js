// 14) Write a function which show or print Prime Number upto provided range (with and without map)
       const n = 20
            function showPrimeNumbers(b){
                for (i = 1; i <= b; i++) {         
                    if (i == 1 || i == 0)
                        continue
                    flag = 1
                    for (j = 2; j <= i / 2; ++j) {
                        if (i % j == 0) {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1)
                        return i;
                }
            }
            const flag1= showPrimeNumbers(20)
           document.write(flag1)