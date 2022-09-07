// 2) Create a function that takes voltage and current and returns the calculated power
function circuitPower(voltage,current){
    return voltage * current
}
// const cal_power= circuitPower(110, 3) ;
// const cal_power= circuitPower(480, 20) ;
const cal_power= circuitPower(230, 10);
document.getElementById("second_h3").innerHTML=cal_power; 
