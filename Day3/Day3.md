<div align="center">
  <h1> Day 3: Booleans, Operators, Date.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

    ```jsx
    let firstName = 'John';
    let lastName = 'Doe';
    let country = 'USA';
    let city = 'New York';
    let age = 30;
    let isMarried = false;
    let year = 2023;

    console.log(typeof firstName); // string
    console.log(typeof lastName); // string
    console.log(typeof country); // string
    console.log(typeof city); // string
    console.log(typeof age); // number
    console.log(typeof isMarried); // boolean
    console.log(typeof year); // number
    ```

2. Check if type of '10' is equal to 10

    ```jsx
    console.log(typeof '10' === typeof 10); // false
    ```

3. Check if parseInt('9.8') is equal to 10

    ```jsx
    console.log(parseInt('9.8') === 10); // true
    ```

4. Boolean value is either true or false.
    1. Write three JavaScript statement which provide truthy value.
    2. Write three JavaScript statement which provide falsy value.

    ```jsx
    // Truthy values
    console.log(10 > 5); // true
    console.log('Hello'); // true
    console.log(1 === 1); // true

    // Falsy values
    console.log(0); // false
    console.log(''); // false
    console.log(false); // false
    ```

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    1. 4 > 3
    2. 4 >= 3
    3. 4 < 3
    4. 4 <= 3
    5. 4 == 4
    6. 4 === 4
    7. 4 != 4
    8. 4 !== 4
    9. 4 != '4'
    10. 4 == '4'
    11. 4 === '4'
    12. Find the length of python and jargon and make a falsy comparison statement.

    ```jsx
    console.log(4 > 3); // true
    console.log(4 >= 3); // true
    console.log(4 < 3); // false
    console.log(4 <= 3); // false
    console.log(4 == 4); // true
    console.log(4 === 4); // true
    console.log(4 != 4); // false
    console.log(4 !== 4); // false
    console.log(4 != '4'); // false
    console.log(4 == '4'); // true
    console.log(4 === '4'); // false
    console.log('python'.length !== 'jargon'.length); // false
    ```

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    1. 4 > 3 && 10 < 12
    2. 4 > 3 && 10 > 12
    3. 4 > 3 || 10 < 12
    4. 4 > 3 || 10 > 12
    5. !(4 > 3)
    6. !(4 < 3)
    7. !(false)
    8. !(4 > 3 && 10 < 12)
    9. !(4 > 3 && 10 > 12)
    10. !(4 === '4')
    11. There is no 'on' in both dragon and python

    ```jsx
    console.log(4 > 3 && 10 < 12); // true
    console.log(4 > 3 && 10 > 12); // false
    console.log(4 > 3 || 10 < 12); // true
    console.log(4 > 3 || 10 > 12); // true
    console.log(!(4 > 3)); // false
    console.log(!(4 < 3)); // true
    console.log(!(false)); // true
    console.log(!(4 > 3 && 10 < 12)); // false
    console.log(!(4 > 3 && 10 > 12)); // true
    console.log(!(4 === '4')); // true
    console.log('dragon'.includes('on') && 'python'.includes('on')); // false
    ```

7. Use the Date object to do the following activities
    1. What is the year today?
    2. What is the month today as a number?
    3. What is the date today?
    4. What is the day today as a number?
    5. What is the hours now?
    6. What is the minutes now?
    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

    ```jsx
    const now = new Date();

    console.log(now.getFullYear()); // Current year
    console.log(now.getMonth() + 1); // Current month (January is 0, so +1)
    console.log(now.getDate()); // Current date
    console.log(now.getDay()); // Current day of the week (0: Sunday, 1: Monday, ...)
    console.log(now.getHours()); // Current hour
    console.log(now.getMinutes()); // Current minutes
    console.log(now.getTime() / 1000); // Number of seconds elapsed from January 1, 1970, to now
    ```

Level : 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

    Enter base: 20

    Enter height: 10

    The area of the triangle is 100

    ```jsx
    let base = prompt("Enter base:");
    let height = prompt("Enter height:");

    let area = 0.5 * base * height;
    console.log("The area of the triangle is", area);
    ```

2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

    Enter side a: 5

    Enter side b: 4

    Enter side c: 3

    The perimeter of the triangle is 12

    ```jsx
    let sideA = prompt("Enter side a:");
    let sideB = prompt("Enter side b:");
    let sideC = prompt("Enter side c:");

    let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    console.log("The perimeter of the triangle is", perimeter);
    ```

3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)))

    ```jsx
    let length = prompt("Enter length:");
    let width = prompt("Enter width:");

    let area = length * width;
    let perimeter = 2 * (parseFloat(length) + parseFloat(width));

    console.log("The area of the rectangle is", area);
    console.log("The perimeter of the rectangle is", perimeter);
    ```

4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

    ```jsx
    let radius = prompt("Enter radius:");
    const pi = 3.14;

    let area = pi * radius * radius;
    let circumference = 2 * pi * radius;

    console.log("The area of the circle is", area);
    console.log("The circumference of the circle is", circumference);
    ```

5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

    ```jsx
    let slope = 2;
    let xIntercept = 2 / slope;
    let yIntercept = -2;

    console.log("Slope:", slope);
    console.log("X-intercept:", xIntercept);
    console.log("Y-intercept:", yIntercept);
    ```

6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

    ```jsx
    let x1 = 2;
    let y1 = 2;
    let x2 = 6;
    let y2 = 10;

    let slope = (y2 - y1) / (x2 - x1);
    console.log("The slope between the points is", slope);
    ```

7. Compare the slope of above two questions.

    ```jsx
    let slope1 = 2;
    let slope2 = (y2 - y1) / (x2 - x1);

    if (slope1 > slope2) {
    console.log("Slope 1 is greater than Slope 2");
    } else if (slope1 < slope2) {
    console.log("Slope 2 is greater than Slope 1");
    } else {
    console.log("Slope 1 and Slope 2 are equal");
    }
    ```

8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

    ```jsx
    // Equation: y = x^2 + 6x + 9

    let a = 1;
    let b = 6;
    let c = 9;

    // Calculate the discriminant
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
    // Two real and distinct roots
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("The x values when y is 0 are", x1, "and", x2);
    } else if (discriminant === 0) {
    // One real root
    let x = -b / (2 * a);
    console.log("The x value when y is 0 is", x);
    } else {
    // Complex roots
    console.log("There are no real roots for the given equation");
    }
    ```

9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    Enter hours: 40

    Enter rate per hour: 28

    Your weekly earning is 1120

    ```jsx
    let hours = prompt("Enter hours:");
    let ratePerHour = prompt("Enter rate per hour:");

    let weeklyEarning = hours * ratePerHour;
    console.log("Your weekly earning is", weeklyEarning);
    ```

10. If the length of your name is greater than 7 say, your name is long else say your name is short.

    ```jsx
    let name = prompt("Enter your name:");

    if (name.length > 7) {
    console.log("Your name is long.");
    } else {
    console.log("Your name is short.");
    }
    ```

11. Compare your first name length and your family name length and you should get this output.

    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'

    Your first name, Asabeneh is longer than your family name, Yetayeh

    ```jsx
    let firstName = 'Asabeneh';
    let lastName = 'Yetayeh';

    if (firstName.length > lastName.length) {
    console.log("Your first name, " + firstName + ", is longer than your family name, " + lastName);
    } else if (firstName.length < lastName.length) {
    console.log("Your family name, " + lastName + ", is longer than your first name, " + firstName);
    } else {
    console.log("Your first name and family name have the same length.");
    }
    ```

12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

    let myAge = 250
    let yourAge = 25

    I am 225 years older than you.

    ```jsx
    let myAge = 250;
    let yourAge = 25;

    let ageDifference = myAge - yourAge;
    console.log("I am", ageDifference, "years older than you.");
    ```

13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.

    ```jsx
    let birthYear = prompt("Enter birth year:");
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    if (age >= 18) {
    console.log("You are", age, "years old. You are old enough to drive.");
    } else {
    let yearsToWait = 18 - age;
    console.log("You are", age, "years old. You will be allowed to drive after", yearsToWait, "years.");
    }
    ```

14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

    Enter number of years you live: 100
    You lived 3153600000 seconds.

    ```jsx
    let years = prompt("Enter number of years you have lived:");
    let seconds = years * 365 * 24 * 60 * 60;
    console.log("You have lived", seconds, "seconds.");
    ```

15. Create a human readable time format using the Date time object
    1. YYYY-MM-DD HH:mm
    2. DD-MM-YYYY HH:mm
    3. DD/MM/YYYY HH:mm

    ```jsx
    let currentDateTime = new Date();

    // YYYY-MM-DD HH:mm
    let formattedDateTime1 = currentDateTime.toISOString().slice(0, 16).replace("T", " ");
    console.log("Formatted DateTime (YYYY-MM-DD HH:mm):", formattedDateTime1);

    // DD-MM-YYYY HH:mm
    let formattedDateTime2 = `${currentDateTime.getDate()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
    console.log("Formatted DateTime (DD-MM-YYYY HH:mm):", formattedDateTime2);

    // DD/MM/YYYY HH:mm
    let formattedDateTime3 = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
    console.log("Formatted DateTime (DD/MM/YYYY HH:mm):", formattedDateTime3);
    ```

Level : 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

    ```jsx
    const now = new Date();
    const formattedTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    console.log(formattedTime);
    ```

🎉 ✅Completed 🎉

[<< Day 2](/Day2/Day2.md) | [Day 4 >>](/Day4/Day4.md)
