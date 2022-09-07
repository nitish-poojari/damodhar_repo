// 5) Create a function that takes the age in years and returns the age in days.
            function calcAge(age_in_year){
                age_in_days = age_in_year * 365
                document.getElementById('fifth').innerHTML=age_in_days
            }
            calcAge(65)
            calcAge(0)
            calcAge(20)