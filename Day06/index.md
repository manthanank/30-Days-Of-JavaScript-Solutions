<div align="center">
  <h1> Day 6: Loops.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

1. Iterate 0 to 10 using for loop, do the same using while and do while loop

    ```jsx
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
    ```

    ```jsx
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    ```

    ```jsx
    let i = 0;
    do {
    console.log(i);
    i++;
    } while (i <= 10);
    ```

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

    ```jsx
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    ```

    ```jsx
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    ```

    ```jsx
    let i = 10;
    do {
        console.log(i);
        i--;
    } while (i >= 0);
    ```

3. Iterate 0 to n using for loop

    ```jsx
    const n = 5; // Replace with desired value
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    ```

4. Write a loop that makes the following pattern using console.log():

    ```jsx
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ```

    ```jsx
    for (let i = 1; i <= 7; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '#';
        }
        console.log(pattern);
    }
    ```

5. Use loop to print the following pattern:

    0 x 0 = 0

    1 x 1 = 1

    2 x 2 = 4

    3 x 3 = 9

    4 x 4 = 16

    5 x 5 = 25

    6 x 6 = 36

    7 x 7 = 49

    8 x 8 = 64

    9 x 9 = 81

    10 x 10 = 100

    ```jsx
    for (let i = 0; i <= 10; i++) {
        console.log(i + ' x ' + i + ' = ' + i * i);
    }
    ```

6. Using loop print the following pattern

    i    i^2   i^3

    0    0     0

    1    1     1

    2    4     8

    3    9     27

    4    16    64

    5    25    125

    6    36    216

    7    49    343

    8    64    512

    9    81    729

    10   100   1000

    ```jsx
    console.log('i    i^2   i^3');
    for (let i = 0; i <= 10; i++) {
        console.log(i + '    ' + i ** 2 + '     ' + i ** 3);
    }
    ```

7. Use for loop to iterate from 0 to 100 and print only even numbers

    ```jsx
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    ```

8. Use for loop to iterate from 0 to 100 and print only odd numbers

    ```jsx
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    ```

9. Use for loop to iterate from 0 to 100 and print only prime numbers

    ```jsx
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    ```

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    The sum of all numbers from 0 to 100 is 5050.

    ```jsx
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
    sum += i;
    }
    console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
    ```

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

    ```jsx
    let sumEvens = 0;
    let sumOdds = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            sumEvens += i;
        } else {
            sumOdds += i;
        }
    }

    console.log(`The sum of all evens from 0 to 100 is ${sumEvens}.`);
    console.log(`The sum of all odds from 0 to 100 is ${sumOdds}.`);
    ```

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    [2550, 2500]

    ```jsx
    let sumEvens = 0;
    let sumOdds = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            sumEvens += i;
        } else {
            sumOdds += i;
        }
    }

    const sumArray = [sumEvens, sumOdds];
    console.log(sumArray);
    ```

13. Develop a small script which generate array of 5 random numbers

    ```jsx
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    console.log(randomNumbers);
    ```

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

    ```jsx
    const uniqueRandomNumbers = [];
    while (uniqueRandomNumbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * 100);
        if (!uniqueRandomNumbers.includes(randomNumber)) {
            uniqueRandomNumbers.push(randomNumber);
        }
    }
    console.log(uniqueRandomNumbers);
    ```

15. Develop a small script which generate a six characters random id:

    5j2khz

    ```jsx
    function generateRandomID() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomID = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomID += characters[randomIndex];
        }
        return randomID;
    }

    const randomID = generateRandomID();
    console.log(randomID);
    ```

Level : 2

1. Develop a small script which generate any number of characters random id:

    fe3jo1gl124g

    xkqci4utda1lmbelpkm03rba

    ```jsx
    function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];
        }
        return id;
    }

    console.log(generateRandomId(12));
    console.log(generateRandomId(24));
    ```

2. Write a script which generates a random hexadecimal number.

    '#ee33df'

    ```jsx
    function generateRandomHexColor() {
        const characters = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            color += characters[randomIndex];
        }
        return color;
    }

    console.log(generateRandomHexColor());
    ```

3. Write a script which generates a random rgb color number.

    rgb(240,180,80)

    ```jsx
    function generateRandomRGBColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    console.log(generateRandomRGBColor());
    ```

4. Using the above countries array, create the following new array.

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const newCountriesArray = countries.map(country => country.toUpperCase());
    console.log(newCountriesArray);
    ```

5. Using the above countries array, create an array for countries length'.

    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesLengthArray = countries.map(country => country.length);
    console.log(countriesLengthArray);
    ```

6. Use the countries array to create the following array of arrays:

    [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
    ]

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const arrayofArrays = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
    console.log(arrayofArrays);
    ```

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    ['Finland','Ireland', 'Iceland']

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
    if (countriesWithLand.length > 0) {
        console.log(countriesWithLand);
    } else {
        console.log('All these countries are without land');
    }
    ```

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ['Albania', 'Bolivia','Ethiopia']

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesEndsWithIa = countries.filter(country => country.toLowerCase().endsWith('ia'));
    if (countriesEndsWithIa.length > 0) {
        console.log(countriesEndsWithIa);
    } else {
        console.log('These are countries without "ia" at the end');
    }
    ```

9. Using the above countries array, find the country containing the biggest number of characters.

    Ethiopia

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const longestCountry = countries.reduce((longest, country) => (country.length > longest.length ? country : longest), '');
    console.log(longestCountry);
    ```

10. Using the above countries array, find the country containing only 5 characters.

    ['Japan', 'Kenya']

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithFiveCharacters = countries.filter(country => country.length === 5);
    console.log(countriesWithFiveCharacters);
    ```

11. Find the longest word in the webTechs array

    ```jsx
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

    const longestWord = webTechs.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
    console.log(longestWord);
    ```

12. Use the webTechs array to create the following array of arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

    ```jsx
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

    const arrayofArrays = webTechs.map(tech => [tech, tech.length]);
    console.log(arrayofArrays);
    ```

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

    ```jsx
    const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

    const acronym = mernStack.reduce((result, tech) => result += tech[0], '');
    console.log(acronym);
    ```

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

    ```jsx
    const techArray = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

    for (let i = 0; i < techArray.length; i++) {
        console.log(techArray[i]);
    }
    ```

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

    ```jsx
    const fruits = ['banana', 'orange', 'mango', 'lemon'];
    const reversedFruits = [];

    for (let i = fruits.length - 1; i >= 0; i--) {
        reversedFruits.push(fruits[i]);
    }

    console.log(reversedFruits);
    ```

16. Print all the elements of array as shown below.

    const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
    ]

    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB

    ```jsx
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ];

    for (let i = 0; i < fullStack.length; i++) {
        for (let j = 0; j < fullStack[i].length; j++) {
            console.log(fullStack[i][j].toUpperCase());
        }
    }
    ```

Level : 3

1. Copy countries array(Avoid mutation)

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const copiedCountries = [...countries];
    console.log(copiedCountries);
    ```

2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const sortedCountries = [...countries].sort();
    console.log(sortedCountries);
    ```

3. Sort the webTechs array and mernStack array

    ```jsx
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
    const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

    const sortedWebTechs = [...webTechs].sort();
    const sortedMernStack = [...mernStack].sort();

    console.log(sortedWebTechs);
    console.log(sortedMernStack);
    ```

4. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
    console.log(countriesWithLand);
    ```

5. Find the country containing the hightest number of characters in the countries array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const longestCountry = countries.reduce((longest, country) => (country.length > longest.length ? country : longest), '');
    console.log(longestCountry);
    ```

6. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
    console.log(countriesWithLand);
    ```

7. Extract all the countries containing only four characters from the countries array and print it as array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithFourChars = countries.filter(country => country.length === 4);
    console.log(countriesWithFourChars);
    ```

8. Extract all the countries containing two or more words from the countries array and print it as array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesWithTwoOrMoreWords = countries.filter(country => country.includes(' '));
    console.log(countriesWithTwoOrMoreWords);
    ```

9. Reverse the countries array and capitalize each country and stored it as an array

    ```jsx
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const reversedAndCapitalized = [...countries].reverse().map(country => country.toUpperCase());
    console.log(reversedAndCapitalized);
    ```

🎉 ✅Completed 🎉

[<< Day 5](/Day05/index.md) | [Day 7 >>](/Day07/index.md)
