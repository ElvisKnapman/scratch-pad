'use strict';

// crete new instance of the date object
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
