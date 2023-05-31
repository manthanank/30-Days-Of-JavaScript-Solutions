let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = true;
let year = 2020;

console.log(typeof firstName); // output: string
console.log(typeof lastName); // output: string
console.log(typeof country); // output: string
console.log(typeof city); // output: string
console.log(typeof age); // output: number
console.log(typeof isMarried); // output: boolean
console.log(typeof year); // output: number

console.log(typeof '10' === 10); // output: false
console.log(parseInt('9.8') === 10); // output: false

console.log(3 > 2); // output: true
console.log(2 + 2 === 4); // output: true
console.log(!(2 > 3)); // output: true

console.log(null); // output: false
console.log(undefined); // output: false
console.log(''); // output: false

console.log(4 > 3); // output: true
console.log(4 >= 3); // output: true
console.log(4 < 3); // output: false
console.log(4 <= 3); // output: false
console.log(4 == 4); // output: true
console.log(4 === 4); // output: true
console.log(4 != 4); // output: false
console.log(4 !== 4); // output: false
console.log(4 != '4'); // output: false
console.log(4 == '4'); // output: true
console.log(4 === '4'); // output: false

const python = 'python';
const jargon = 'jargon';

console.log(!(python.length === jargon.length)); // output: true

console.log(4 > 3 && 10 < 12); // output: true
console.log(4 > 3 && 10 > 12); // output: false
console.log(4 > 3 || 10 < 12); // output: true
console.log(4 > 3 || 10 > 12); // output: true
console.log(!(4 > 3)); // output: false
console.log(!(4 < 3)); // output: true
console.log(!false); // output: true
console.log(!(4 > 3 && 10 < 12)); // output: false
console.log(!(4 > 3 && 10 > 12)); // output: true
console.log(!(4 === '4')); // output: true

console.log(!('dragon'.indexOf('on') >= 0 && 'python'.indexOf('on') >= 0)); // output: true

const today = new Date();
console.log(`Year: ${today.getFullYear()}`);
console.log(`Month (number): ${today.getMonth() + 1}`);
console.log(`Date: ${today.getDate()}`);
console.log(`Day (number): ${today.getDay()}`);
console.log(`Hours: ${today.getHours()}`);
console.log(`Minutes: ${today.getMinutes()}`);
console.log(`Seconds elapsed from January 1, 1970: ${today.getTime() / 1000}`);