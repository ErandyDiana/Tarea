
/* Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/

function getDayNumber(janFirstDayNumber, yearDayNumber){
    return (janFirstDayNumber+(yearDayNumber-1)) %7;
} //getDayNnumber

console.log(getDayNnumber (6,256));