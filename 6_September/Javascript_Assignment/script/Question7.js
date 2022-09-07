 // 7) create a function to find out a maximum from an array
        function max_value(){
        const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
        var largest = numbers[0];

        for (let i=0;i< numbers.length; i++) {
            if (largest < numbers[i] ) {
                largest = numbers[i];
            }
        }
        // console.log(largest);
        return largest
            }
        const greater=max_value();
        document.getElementById('seven').innerHTML=greater
