 //12)Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
        function showPattern(a){
            let j=1
            for(let i=1;i<=a;i++){
                for(j=1;j<=i;j++){
                    document.write("*");
                }
                document.write(`<br/>`);
                j=1;
            }
        }
        const pattern= showPattern(5)
        document.getElementById('twelve').innerHTML=pattern