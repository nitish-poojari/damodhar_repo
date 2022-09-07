 // 8) create a function to find out a minimum from an array
        function min_value(){
        const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
        var minimum = numbers[0];

        for (let i=0;i< numbers.length; i++) {
            if (minimum > numbers[i] ) {
                minimum = numbers[i];
            }
        }
        return minimum;
            }
        const small_value= min_value()
        document.getElementById('eight').innerHTML=small_value