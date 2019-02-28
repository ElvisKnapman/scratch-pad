'use strict';

// create new instance of the date object
const now = new Date();

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`); // Month in number form, zero indexed
console.log(`Day of the Week: ${now.getDay()}`); // Day in number form, zero based, starts at Sunday
console.log(`Hour: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentMonth = now.getMonth();
console.log(months[currentMonth]);

const currentDay = now.getDay();
console.log(days[currentDay]);


// Unix Epoch - January 1st 1970 00:00

const dateOne = new Date('May 10 2001 12:00:00');
const dateTwo = new Date('May 10 2003 12:00:00');

// get time of dates in milliseconds (calculate time elapsed from January 1st 1970)
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

// check which date came first by comparing their 'timestamp' which is in milliseconds
if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(`Date 1 came first: ${dateOne.toString()}`);
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(`Date 2 came first: ${dateTwo.toString()}`);
} else {
    console.log(`The dates are the same.`);
}
