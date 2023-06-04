<div align="center">
  <h1> Day 12: Regular Expressionss.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

    ```jsx
    function calculateAnnualIncome(text) {
        const regex = /\d+/g;
        const matches = text.match(regex);

        let salary = parseInt(matches[0]) * 12;
        let bonus = parseInt(matches[1]);
        let courses = parseInt(matches[2]) * 12;

        let totalIncome = salary + bonus + courses;
        return totalIncome;
    }

    const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
    const totalIncome = calculateAnnualIncome(text);
    console.log(totalIncome); // Output: 106600
    ```

2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

    ```jsx
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]

    distance = 12
    ```

    ```jsx
    function findFurthestDistance(points) {
        const sortedPoints = points.map(Number).sort((a, b) => a - b);
        const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
        return distance;
    }

    const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
    const distance = findFurthestDistance(points);
    console.log(distance); // Output: 12
    ```

3. Write a pattern which identify if a string is a valid JavaScript variable

    ```jsx
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```

    ```jsx
    function isValidVariable(variable) {
        const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
        return regex.test(variable);
    }

    console.log(isValidVariable('first_name')); // Output: true
    console.log(isValidVariable('first-name')); // Output: false
    console.log(isValidVariable('1first_name')); // Output: false
    console.log(isValidVariable('firstname')); // Output: true
    ```

## Level : 2

1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    ```jsx
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))
    ```

    ```jsx
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]
    ```

    ```jsx
    console.log(tenMostFrequentWords(paragraph, 10))
    ```

    ```jsx
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
    ```

    ```jsx
    function tenMostFrequentWords(paragraph, count = 10) {
        const words = paragraph.toLowerCase().match(/\b\w+\b/g);

        const wordCount = {};
        for (let word of words) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }

        const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
        const mostFrequentWords = sortedWords.slice(0, count).map(([word, count]) => ({ word, count }));

        return mostFrequentWords;
    }

    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
    console.log(tenMostFrequentWords(paragraph));
    // Output:
    // [
    //   { word: 'love', count: 6 },
    //   { word: 'you', count: 5 },
    //   { word: 'can', count: 3 },
    //   { word: 'what', count: 2 },
    //   { word: 'teaching', count: 2 },
    //   { word: 'not', count: 2 },
    //   { word: 'else', count: 2 },
    //   { word: 'do', count: 2 },
    //   { word: 'i', count: 2 },
    //   { word: 'which', count: 1 }
    // ]
    ```

## Level : 3

1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

    ```jsx
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
    ```

    ```jsx
    I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
    ```

    ```jsx
    function cleanText(text) {
        return text.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    }

    function mostFrequentWords(text, count = 3) {
        const words = text.toLowerCase().split(' ');

        const wordCount = {};
        for (let word of words) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }

        const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
        const mostFrequentWords = sortedWords.slice(0, count).map(([word, count]) => ({ word, count }));

        return mostFrequentWords;
    }

    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    const cleanedText = cleanText(sentence);
    console.log(cleanedText);
    // Output: "I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher"

    console.log(mostFrequentWords(cleanedText));
    // Output:
    // [
    //   { word: 'i', count: 3 },
    //   { word: 'teaching', count: 2 },
    //   { word: 'a', count: 2 }
    // ]
    ```

2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

    ```jsx
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
    ```

    ```jsx
    function cleanText(text) {
        return text.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    }

        function mostFrequentWords(text, count = 3) {
        const words = text.toLowerCase().split(' ');

        const wordCount = {};
        for (let word of words) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }

        const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
        const mostFrequentWords = sortedWords.slice(0, count).map(([word, count]) => ({ word, count }));

        return mostFrequentWords;
    }

    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    const cleanedText = cleanText(sentence);
    console.log(mostFrequentWords(cleanedText));
    // Output:
    // [
    //   { word: 'i', count: 3 },
    //   { word: 'teaching', count: 2 },
    //   { word: 'a', count: 2 }
    // ]
    ```

🎉 ✅Completed 🎉

[<< Day 11](/Day11/Day11.md) | [Day 13 >>](/Day13/Day13.md)
