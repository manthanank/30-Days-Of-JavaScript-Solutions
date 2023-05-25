<div align="center">
  <h1> Day 7: Functions.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

1. Declare a function fullName and it print out your full name.

    ```jsx
    function fullName() {
        console.log("Your Full Name");
    }

    fullName();
    ```

2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

    ```jsx
    function fullName(firstName, lastName) {
        return firstName + " " + lastName;
    }

    console.log(fullName("John", "Doe"));
    ```

3. Declare a function addNumbers and it takes two two parameters and it returns sum.

    ```jsx
    function addNumbers(num1, num2) {
        return num1 + num2;
    }

    console.log(addNumbers(5, 3));
    ```

4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

    ```jsx
    function areaOfRectangle(length, width) {
        return length * width;
    }

    console.log(areaOfRectangle(4, 5));
    ```

5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

    ```jsx
    function perimeterOfRectangle(length, width) {
        return 2 * (length + width);
    }

    console.log(perimeterOfRectangle(4, 5));
    ```

6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

    ```jsx
    function volumeOfRectPrism(length, width, height) {
        return length * width * height;
    }

    console.log(volumeOfRectPrism(4, 5, 3));
    ```

7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

    ```jsx
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }

    console.log(areaOfCircle(3));
    ```

8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

    ```jsx
    function circumOfCircle(radius) {
        return 2 * Math.PI * radius;
    }

    console.log(circumOfCircle(3));
    ```

9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

    ```jsx
    function density(mass, volume) {
        return mass / volume;
    }

    console.log(density(100, 20));
    ```

10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

    ```jsx
    function speed(distance, time) {
        return distance / time;
    }

    console.log(speed(100, 10));
    ```

11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

    ```jsx
    function weight(mass, gravity) {
        return mass * gravity;
    }

    console.log(weight(50, 9.8));
    ```

12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

    ```jsx
    function convertCelsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    console.log(convertCelsiusToFahrenheit(25));
    ```

13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

    1. The same groups apply to both men and women.
    2. Underweight: BMI is less than 18.5
    3. Normal weight: BMI is 18.5 to 24.9
    4. Overweight: BMI is 25 to 29.9
    5. Obese: BMI is 30 or more

    ```jsx
    function bmi(weight, height) {
        var bmiValue = weight / (height * height);
        var category;

        if (bmiValue < 18.5) {
            category = "Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            category = "Normal weight";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        return "BMI: " + bmiValue.toFixed(2) + ", Category: " + category;
    }

    console.log(bmi(70, 1.75));
    ```

14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

    ```jsx
    function checkSeason(month) {
        if (month >= 3 && month <= 5) {
            return "Spring";
        } else if (month >= 6 && month <= 8) {
            return "Summer";
        } else if (month >= 9 && month <= 11) {
            return "Autumn";
        } else {
            return "Winter";
        }
    }

    console.log(checkSeason(5));
    ```

15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    console.log(findMax(0, 10, 5))

    10

    console.log(findMax(0, -10, -2))

    0

    ```jsx
    function findMax(num1, num2, num3) {
        var max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        return max;
    }

    console.log(findMax(0, 10, 5));
    console.log(findMax(0, -10, -2));
    ```

Level : 2

1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

    ```jsx
    function solveLinEquation(a, b, c) {
        if (a === 0 && b === 0) {
            // Invalid equation: both coefficients are zero
            return "Invalid equation";
        } else if (a === 0) {
            // Case when the equation is in the form of: by + c = 0
            return -c / b;
        } else if (b === 0) {
            // Case when the equation is in the form of: ax + c = 0
            return -c / a;
        } else {
            // Case when the equation is in the standard form: ax + by + c = 0
            return -(c / b) - (a / b) * x;
        }
    }
    ```

2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

    console.log(solveQuadratic()) // {0}

    console.log(solveQuadratic(1, 4, 4)) // {-2}

    console.log(solveQuadratic(1, -1, -2)) // {2, -1}

    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}

    console.log(solveQuadratic(1, 0, -4)) //{2, -2}

    console.log(solveQuadratic(1, -1, 0)) //{1, 0}

    ```jsx
    function solveQuadEquation(a, b, c) {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            // Two distinct real roots
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        } else if (discriminant === 0) {
            // One real root (repeated)
            const root = -b / (2 * a);
            return [root];
        } else {
            // Complex roots (no real roots)
            return [];
        }
    }
    ```

3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

    ```jsx
    function printArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    ```

4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

    showDateTime()

    08/01/2020 04:08

    ```jsx
    function showDateTime() {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        console.log(`${formattedDate} ${hours}:${minutes}`);
    }
    ```

5. Declare a function name swapValues. This function swaps value of x to y.

    swapValues(3, 4) // x => 4, y=>3

    swapValues(4, 5) // x = 5, y = 4

    ```jsx
    function swapValues(x, y) {
        const temp = x;
        x = y;
        y = temp;
        console.log(`x = ${x}, y = ${y}`);
    }
    ```

6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

    console.log(reverseArray([1, 2, 3, 4, 5]))

    //[5, 4, 3, 2, 1]

    console.log(reverseArray(['A', 'B', 'C']))

    //['C', 'B', 'A']

    ```jsx
    function reverseArray(arr) {
        const reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversed.push(arr[i]);
        }
        return reversed;
    }
    ```

7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

    ```jsx
    function capitalizeArray(arr) {
        const capitalized = [];
        for (let i = 0; i < arr.length; i++) {
            capitalized.push(arr[i].toUpperCase());
        }
        return capitalized;
    }
    ```

8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

    ```jsx
    function addItem(arr, item) {
        arr.push(item);
        return arr;
    }
    ```

9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

    ```jsx
    function removeItem(arr, index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
        }
        return arr;
    }
    ```

10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

    ```jsx
    function sumOfNumbers(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    ```

11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

    ```jsx
    function sumOfOdds(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 2 !== 0) {
            sum += i;
            }
        }
        return sum;
    }
    ```

12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

    ```jsx
    function sumOfEven(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 2 === 0) {
            sum += i;
            }
        }
        return sum;
    }
    ```

13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    evensAndOdds(100);

    The number of odds are 50.

    The number of evens are 51.

    ```jsx
    function evensAndOdds(num) {
        let evenCount = 0;
        let oddCount = 0;
        while (num > 0) {
            const digit = num % 10;
            if (digit % 2 === 0) {
            evenCount++;
            } else {
            oddCount++;
            }
            num = Math.floor(num / 10);
        }
        console.log(`The number of odds are ${oddCount}`);
        console.log(`The number of evens are ${evenCount}`);
    }
    ```

14. Write a function which takes any number of arguments and return the sum of the arguments

    sum(1, 2, 3) // -> 6

    sum(1, 2, 3, 4) // -> 10

    ```jsx
    function sum(...args) {
        let total = 0;
        for (let i = 0; i < args.length; i++) {
            total += args[i];
        }
        return total;
    }
    ```

15. Writ a function which generates a randomUserIp.

    ```jsx
    function randomUserIp() {
        const segment1 = Math.floor(Math.random() * 256);
        const segment2 = Math.floor(Math.random() * 256);
        const segment3 = Math.floor(Math.random() * 256);
        const segment4 = Math.floor(Math.random() * 256);
        return `${segment1}.${segment2}.${segment3}.${segment4}`;
    }
    ```

16. Write a function which generates a randomMacAddress

    ```jsx
    function randomMacAddress() {
        const characters = "0123456789ABCDEF";
        let macAddress = "";
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 2; j++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            macAddress += characters[randomIndex];
            }
            if (i !== 5) {
            macAddress += ":";
            }
        }
        return macAddress;
    }
    ```

17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    console.log(randomHexaNumberGenerator());

    '#ee33df'

    ```jsx
    function randomHexaNumberGenerator() {
        const hexDigits = "0123456789ABCDEF";
        let hexNumber = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hexDigits.length);
            hexNumber += hexDigits[randomIndex];
        }
        return hexNumber;
    }
    ```

18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

    console.log(userIdGenerator());

    41XTDbE

    ```jsx
    function userIdGenerator() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let userId = "";
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters[randomIndex];
        }
        return userId;
    }
    ```

Level : 3

1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    userIdGeneratedByUser()

    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()

    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '

    ```jsx
    function userIdGeneratedByUser() {
        var numberOfCharacters = parseInt(prompt("Enter the number of characters:"));
        var numberOfIds = parseInt(prompt("Enter the number of IDs to generate:"));

        for (var i = 0; i < numberOfIds; i++) {
            var userId = "";
            for (var j = 0; j < numberOfCharacters; j++) {
                var randomAscii = Math.floor(Math.random() * 25) + 97; // generates random lowercase character code (97-122)
                var randomCharacter = String.fromCharCode(randomAscii);
                userId += randomCharacter;
            }
            console.log(userId);
        }
    }

    userIdGeneratedByUser();
    ```

2. Write a function name rgbColorGenerator and it generates rgb colors.

    rgbColorGenerator()

    rgb(125,244,255)

    ```jsx
    function rgbColorGenerator() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
        console.log(rgbColor);
    }

    rgbColorGenerator();
    ```

3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

    ```jsx
    function arrayOfHexaColors(numberOfColors) {
        var colors = [];
        for (var i = 0; i < numberOfColors; i++) {
            var hexaColor = "#" + Math.floor(Math.random() * 16777216).toString(16); // generates a random hexadecimal color
            colors.push(hexaColor);
        }
        return colors;
    }

    console.log(arrayOfHexaColors(5));
    ```

4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

    ```jsx
    function arrayOfRgbColors(numberOfColors) {
        var colors = [];
        for (var i = 0; i < numberOfColors; i++) {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);
            var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
            colors.push(rgbColor);
        }
        return colors;
    }

    console.log(arrayOfRgbColors(5));
    ```

5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

    ```jsx
    function convertHexaToRgb(hexaColor) {
        var red = parseInt(hexaColor.substring(1, 3), 16);
        var green = parseInt(hexaColor.substring(3, 5), 16);
        var blue = parseInt(hexaColor.substring(5, 7), 16);
        var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
        return rgbColor;
    }

    console.log(convertHexaToRgb("#aabbcc"));
    ```

6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

    ```jsx
    function convertRgbToHexa(rgbColor) {
        var rgbArray = rgbColor.substring(4, rgbColor.length - 1).split(",");
        var red = parseInt(rgbArray[0]);
        var green = parseInt(rgbArray[1]);
        var blue = parseInt(rgbArray[2]);
        var hexaColor = "#" + ((red << 16) | (green << 8) | blue).toString(16).padStart(6, "0");
        return hexaColor;
    }

    console.log(convertRgbToHexa("rgb(170,187,204)"));
    ```

7. Write a function generateColors which can generate any number of hexa or rgb colors.

    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']

    console.log(generateColors('hexa', 1)) // '#b334ef'

    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']

    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

    ```jsx
    function generateColors(type, numberOfColors) {
        if (type === "hexa") {
            var colors = [];
            for (var i = 0; i < numberOfColors; i++) {
            var hexaColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
            colors.push(hexaColor);
            }
            return colors;
        } else if (type === "rgb") {
            var colors = [];
            for (var i = 0; i < numberOfColors; i++) {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);
            var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
            colors.push(rgbColor);
            }
            return colors;
        } else {
            return "Invalid color type. Use 'hexa' or 'rgb'.";
        }
    }

    console.log(generateColors("hexa", 3));
    console.log(generateColors("rgb", 3));
    ```

8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

    ```jsx
    function shuffleArray(array) {
        var shuffledArray = array.slice(); // create a copy of the array
        for (var i = shuffledArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }
        return shuffledArray;
    }

    console.log(shuffleArray([1, 2, 3, 4, 5]));
    ```

9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

    ```jsx
    function factorial(number) {
        var result = 1;
        for (var i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }

    console.log(factorial(5));
    ```

10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

    ```jsx
    function isEmpty(value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value === "string" && value.trim() === "") {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === "object" && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }

    console.log(isEmpty(""));
    console.log(isEmpty([]));
    console.log(isEmpty({}));
    ```

11. Call your function sum, it takes any number of arguments and it returns the sum.

    ```jsx
    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    console.log(sum(1, 2, 3, 4, 5));
    ```

12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

    ```jsx
    function sumOfArrayItems(arr) {
        if (!Array.isArray(arr)) {
            return "Invalid input. Please provide an array.";
        }

        if (arr.length === 0) {
            return 0;
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
            return "Array contains non-numeric items.";
            }
        }

        return arr.reduce((acc, curr) => acc + curr, 0);
    }

    console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
    console.log(sumOfArrayItems([1, 2, "3", 4, 5]));
    ```

13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

    ```jsx
    function average(arr) {
        if (!Array.isArray(arr)) {
            return "Invalid input. Please provide an array.";
        }

        if (arr.length === 0) {
            return 0;
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
            return "Array contains non-numeric items.";
            }
        }

        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        return sum / arr.length;
    }

    console.log(average([1, 2, 3, 4, 5]));
    console.log(average([1, 2, "3", 4, 5]));
    ```

14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));

    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

      'Not Found'

    ```jsx
    function modifyArray(arr) {
        if (arr.length < 5) {
            return "Item not found";
        }

        arr[4] = arr[4].toUpperCase();
        return arr;
    }

    console.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]));
    console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"]));
    console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
    ```

15. Write a function called isPrime, which checks if a number is prime number.

    ```jsx
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
            return false;
            }
        }

        return true;
    }

    console.log(isPrime(7));
    console.log(isPrime(10));
    ```

16. Write a functions which checks if all items are unique in the array.

    ```jsx
    function areAllItemsUnique(arr) {
        return arr.length === new Set(arr).size;
    }

    console.log(areAllItemsUnique([1, 2, 3, 4, 5])); // true
    console.log(areAllItemsUnique([1, 2, 3, 3, 4])); // false
    ```

17. Write a function which checks if all the items of the array are the same data type.

    ```jsx
    function areAllItemsSameType(arr) {
        if (arr.length === 0) {
            return true;
        }

        const firstItemType = typeof arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== firstItemType) {
            return false;
            }
        }

        return true;
    }

    console.log(areAllItemsSameType([1, 2, 3, 4, 5])); // true
    console.log(areAllItemsSameType([1, 2, 3, "4", 5])); // false
    ```

18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

    ```jsx
    function isValidVariable(variableName) {
        const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        return regex.test(variableName);
    }

    console.log(isValidVariable("valid_variable")); // true
    console.log(isValidVariable("$anotherValidVariable")); // true
    console.log(isValidVariable("123InvalidVariable")); // false
    console.log(isValidVariable("invalid-variable")); // false
    ```

19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    sevenRandomNumbers()

    [(1, 4, 5, 7, 9, 8, 0)]

    ```jsx
    function sevenRandomNumbers() {
        const numbers = new Set();
        while (numbers.size < 7) {
            const randomNum = Math.floor(Math.random() * 10);
            numbers.add(randomNum);
        }
        return Array.from(numbers);
    }

    console.log(sevenRandomNumbers());
    ```

20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

    ```jsx
    function reverseCountries(countries) {
        return countries.slice().reverse();
    }

    console.log(reverseCountries(["USA", "Canada", "Mexico"]));
    ```

🎉 ✅Completed 🎉

[<< Day 6](/Day6/Day6.md) | [Day 8 >>](/Day8/Day8.md)
