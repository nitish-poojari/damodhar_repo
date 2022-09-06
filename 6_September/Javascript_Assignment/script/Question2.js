// 2) Create a function that takes voltage and current and returns the calculated power
function circuitPower(voltage,current){
            let Power = voltage * current
            document.getElementById('main').innerHTML=Power
        }
        // circuitPower(230, 10) 
         circuitPower(110, 3) 
        // circuitPower(480, 20) 

