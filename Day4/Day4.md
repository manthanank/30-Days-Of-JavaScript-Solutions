<div align="center">
  <h1> Day 4: Conditionals.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    Enter your age: 30

    You are old enough to drive.

    Enter your age:15

    You are left with 3 years to drive.

    ```jsx
    let age = prompt("Enter your age:");

    if (age >= 18) {
    console.log("You are old enough to drive.");
    } else {
    let yearsLeft = 18 - age;
    console.log("You are left with " + yearsLeft + " years to drive.");
    }
    ```

2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

    Enter your age: 30

    You are 5 years older than me.

    ```jsx
    let myAge = 25;
    let yourAge = prompt("Enter your age:");

    if (myAge > yourAge) {
    console.log("I am older than you.");
    } else if (myAge < yourAge) {
    console.log("You are older than me.");
    } else {
    console.log("We are the same age.");
    }
    ```

3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    1. using if else
    2. ternary operator.

    let a = 4

    let b = 3

    4 is greater than 3

    ```jsx
    let a = 4;
    let b = 3;

    if (a > b) {
    console.log("a is greater than b.");
    } else {
    console.log("a is less than or equal to b.");
    }
    ```

    ```jsx
    let a = 4;
    let b = 3;

    let result = a > b ? "a is greater than b." : "a is less than or equal to b.";
    console.log(result);
    ```

4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    Enter a number: 2

    2 is an even number

    Enter a number: 9

    9 is is an odd number.

    ```jsx
    let number = prompt("Enter a number:");

    if (number % 2 === 0) {
    console.log(number + " is an even number.");
    } else {
    console.log(number + " is an odd number.");
    }
    ```

Level : 2

1. Write a code which can give grades to students according to theirs scores:

    1. 80-100, A

    2. 70-89, B

    3. 60-69, C

    4. 50-59, D

    5. 0-49, F

    ```jsx
    let score = prompt("Enter the student's score:");

    if (score >= 80 && score <= 100) {
    console.log("Grade: A");
    } else if (score >= 70 && score <= 89) {
    console.log("Grade: B");
    } else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
    } else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
    } else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
    } else {
    console.log("Invalid score.");
    }
    ```

2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    1. September, October or November, the season is Autumn.
    2. December, January or February, the season is Winter.
    3. March, April or May, the season is Spring
    4. June, July or August, the season is Summer

    ```jsx
    let month = prompt("Enter the current month:");

    if (month === "September" || month === "October" || month === "November") {
    console.log("Season: Autumn");
    } else if (month === "December" || month === "January" || month === "February") {
    console.log("Season: Winter");
    } else if (month === "March" || month === "April" || month === "May") {
    console.log("Season: Spring");
    } else if (month === "June" || month === "July" || month === "August") {
    console.log("Season: Summer");
    } else {
    console.log("Invalid month.");
    }
    ```

3. Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday

    Saturday is a weekend.

    What is the day today? saturDaY

    Saturday is a weekend.

    What is the day today? Friday

    Friday is a working day.

    What is the day today? FrIDAy

    Friday is a working day.

    ```jsx
    let day = prompt("What is the day today?");

    day = day.toLowerCase();

    if (day === "saturday" || day === "sunday") {
    console.log(day + " is a weekend.");
    } else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
    ) {
    console.log(day + " is a working day.");
    } else {
    console.log("Invalid day.");
    }
    ```

Level : 3

1. Write a program which tells the number of days in a month.

    Enter a month: January

    January has 31 days.

    Enter a month: JANUARY

    January has 31 day

    Enter a month: February

    February has 28 days.

    Enter a month: FEbruary

    February has 28 days.

    ```jsx
    let month = prompt("Enter a month:");

    month = month.toLowerCase();

    if (
    month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december"
    ) {
    console.log(month + " has 31 days.");
    } else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
    ) {
    console.log(month + " has 30 days.");
    } else if (month === "february") {
    console.log(month + " has 28 days.");
    } else {
    console.log("Invalid month.");
    }
    ```

2. Write a program which tells the number of days in a month, now consider leap year.

    ```jsx
    let month = prompt("Enter a month:");
    let year = prompt("Enter a year:");

    month = month.toLowerCase();

    let days;

    if (
    month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december"
    ) {
    days = 31;
    } else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
    ) {
    days = 30;
    } else if (month === "february") {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        days = 29; // Leap year
    } else {
        days = 28; // Non-leap year
    }
    } else {
    console.log("Invalid month.");
    }

    if (days) {
    console.log(month + " has " + days + " days.");
    }
    ```

🎉 ✅Completed 🎉

[<< Day 3](/Day3/Day3.md) | [Day 5 >>](/Day5/Day5.md)
