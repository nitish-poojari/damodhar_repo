"use strict";
function enterData() {
    let days_in_month = Number(prompt("Enter Number of days in Month", ""));
    let day_of_1 = Number(prompt("Enter  month starts If Monday - 0 and so On", ""));
    let days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    let no_of_week = [];
    for (let i = 0; i <= 5; i++) {
        for (let j = day_of_1; j < 7; j++) {
            if (no_of_week.length < days_in_month) {
                no_of_week.push(days[j]);
            }
        }
        day_of_1 = 0;
    }
    for (let i = 0; i < no_of_week.length; i++) {
        // document.write(`${i + 1} &nbsp ${no_of_week[i]} <br> <br>`)
        console.log(`${i + 1} : ${no_of_week[i]}`);
    }
}
