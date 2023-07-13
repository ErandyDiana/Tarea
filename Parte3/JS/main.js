
/* Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
*/

function businessHours(dayNumber, hourNumber){
    if ( (dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)) {
        return true;
       } else {
        return false;
       } //if
}
function getDayNumber(janFirstDayNumber, yearDayNumber){
    return (janFirstDayNumber+(yearDayNumber-1)) %7;
}

function Parte3(yearDayNumber, hourNumber){
    let day = getDayNumber(0, yearDayNumber);
    
    return businessHours(day, hourNumber);
           
}//Parte3
console.log(
    Parte3(23, 17)
);