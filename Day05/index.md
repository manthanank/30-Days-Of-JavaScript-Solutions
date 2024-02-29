<div align="center">
  <h1> Day 5: Arrays.</h1>
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

1. Declare an empty array;

    ```jsx
    const emptyArray = [];
    ```

2. Declare an array with more than 5 number of elements

    ```jsx
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    ```

3. Find the length of your array

    ```jsx
    const arrayLength = numbers.length;
    console.log(arrayLength); // Output: 7
    ```

4. Get the first item, the middle item and the last item of the array

    ```jsx
    const firstItem = numbers[0];
    const middleItem = numbers[Math.floor(numbers.length / 2)];
    const lastItem = numbers[numbers.length - 1];

    console.log(firstItem); // Output: 1
    console.log(middleItem); // Output: 4
    console.log(lastItem); // Output: 7
    ```

5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

    ```jsx
    const mixedDataTypes = [1, 'two', true, null, { key: 'value' }, undefined];
    const mixedDataTypesLength = mixedDataTypes.length;
    console.log(mixedDataTypesLength); // Output: 6
    ```

6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

    ```jsx
    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    ```

7. Print the array using console.log()

    ```jsx
    console.log(itCompanies);
    ```

8. Print the number of companies in the array

    ```jsx
    const numCompanies = itCompanies.length;
    console.log(numCompanies); // Output: 7
    ```

9. Print the first company, middle and last company

    ```jsx
    const firstCompany = itCompanies[0];
    const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
    const lastCompany = itCompanies[itCompanies.length - 1];

    console.log(firstCompany); // Output: Facebook
    console.log(middleCompany); // Output: Apple
    console.log(lastCompany); // Output: Amazon
    ```

10. Print out each company

    ```jsx
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i]);
    }
    ```

11. Change each company name to uppercase one by one and print them out

    ```jsx
    for (let i = 0; i < itCompanies.length; i++) {
        const uppercaseCompany = itCompanies[i].toUpperCase();
        console.log(uppercaseCompany);
    }
    ```

12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

    ```jsx
    const sentence = itCompanies.join(', ') + ' are big IT companies.';
    console.log(sentence);
    ```

13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

    ```jsx
    const companyToFind = 'Microsoft';
    const foundCompany = itCompanies.includes(companyToFind) ? companyToFind : 'Company not found';
    console.log(foundCompany);
    ```

14. Filter out companies which have more than one 'o' without the filter method

    ```jsx
    const filteredCompanies = [];
    for (let i = 0; i < itCompanies.length; i++) {
        const company = itCompanies[i];
        let count = 0;
        for (let j = 0; j < company.length; j++) {
            if (company[j].toLowerCase() === 'o') {
                count++;
            }
        }
        if (count <= 1) {
            filteredCompanies.push(company);
        }
    }

    console.log(filteredCompanies);
    ```

15. Sort the array using sort() method

    ```jsx
    itCompanies.sort();
    console.log(itCompanies);
    ```

16. Reverse the array using reverse() method

    ```jsx
    itCompanies.reverse();
    console.log(itCompanies);
    ```

17. Slice out the first 3 companies from the array

    ```jsx
    const firstThreeCompanies = itCompanies.slice(0, 3);
    console.log(firstThreeCompanies);
    ```

18. Slice out the last 3 companies from the array

    ```jsx
    const lastThreeCompanies = itCompanies.slice(-3);
    console.log(lastThreeCompanies);
    ```

19. Slice out the middle IT company or companies from the array

    ```jsx
    const middleIndex = Math.floor(itCompanies.length / 2);
    const middleCompanies = itCompanies.splice(middleIndex, 1);
    console.log(middleCompanies);
    ```

20. Remove the first IT company from the array

    ```jsx
    itCompanies.shift();
    console.log(itCompanies);
    ```

21. Remove the middle IT company or companies from the array

    ```jsx
    const middleIndex = Math.floor(itCompanies.length / 2);
    itCompanies.splice(middleIndex, 1);
    console.log(itCompanies);
    ```

22. Remove the last IT company from the array

    ```jsx
    itCompanies.pop();
    console.log(itCompanies);
    ```

23. Remove all IT companies

    ```jsx
    itCompanies.length = 0;
    console.log(itCompanies);
    ```

Level : 2

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

    ```jsx
    // countries.js
    const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

    module.exports = countries;
    ```

    ```jsx
    // web_techs.js
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular', 'Node.js', 'Express.js'];

    module.exports = webTechs;
    ```

    ```jsx
    const countries = require('./countries');
    const webTechs = require('./web_techs');

    console.log(countries);
    console.log(webTechs);
    ```

2. First remove all the punctuations and change the string to array and count the number of words in the array

    ```jsx
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```jsx
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13
    ```

    ```jsx
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
    let words = text.replace(/[^\w\s]/g, '').split(' ');

    console.log(words);
    console.log(words.length);
    ```

3. In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    1. add 'Meat' in the beginning of your shopping cart if it has not been already added
    2. add Sugar at the end of you shopping cart if it has not been already added
    3. remove 'Honey' if you are allergic to honey
    4. modify Tea to 'Green Tea'

    ```jsx
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

    // add 'Meat' to the beginning of the shopping cart if it's not already added
    if (!shoppingCart.includes('Meat')) {
        shoppingCart.unshift('Meat');
    }

    // add 'Sugar' to the end of the shopping cart if it's not already added
    if (!shoppingCart.includes('Sugar')) {
        shoppingCart.push('Sugar');
    }

    // remove 'Honey' if you are allergic to honey
    if (shoppingCart.includes('Honey')) {
        const index = shoppingCart.indexOf('Honey');
        shoppingCart.splice(index, 1);
    }

    // modify 'Tea' to 'Green Tea'
    if (shoppingCart.includes('Tea')) {
        const index = shoppingCart.indexOf('Tea');
        shoppingCart[index] = 'Green Tea';
    }

    console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]
    ```

4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

    ```jsx
    const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain'];

    if (countries.includes('Ethiopia')) {
        console.log('ETHIOPIA');
    } else {
        countries.push('Ethiopia');
    }

    console.log(countries); // ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Ethiopia"]
    ```

5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    ```jsx
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular', 'Node.js', 'Express.js'];

    if (webTechs.includes('Sass')) {
        console.log('Sass is a CSS preprocess');
    } else {
        webTechs.push('Sass');
        console.log(webTechs); // ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Node.js", "Express.js", "Sass"]
    }
    ```

6. Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    console.log(fullStack)

    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

    ```jsx
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
    const backEnd = ['Node', 'Express', 'MongoDB'];

    const fullStack = frontEnd.concat(backEnd);

    console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

Level : 3

1. The following is an array of 10 students ages:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    1.Sort the array and find the min and max age
    2.Find the median age(one middle item or two middle items divided by two)
    3.Find the average age(all items divided by number of items)
    4.Find the range of the ages(max minus min)
    5.Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the [countries array](https://github.com/manthanank/30daysof-javascript-excercise/blob/main/Day5/countries.js)

    ```jsx
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    // 1. Sort the array and find the min and max age
    ages.sort((a, b) => a - b);
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];

    // 2. Find the median age (one middle item or two middle items divided by two)
    const middleIndex = Math.floor(ages.length / 2);
    const medianAge =
    ages.length % 2 === 0
        ? (ages[middleIndex - 1] + ages[middleIndex]) / 2
        : ages[middleIndex];

    // 3. Find the average age (sum of all items divided by the number of items)
    const averageAge = ages.reduce((total, age) => total + age, 0) / ages.length;

    // 4. Find the range of the ages (max minus min)
    const ageRange = maxAge - minAge;

    // 5. Compare the value of (min - average) and (max - average) using abs() method
    const diffMinAvg = Math.abs(minAge - averageAge);
    const diffMaxAvg = Math.abs(maxAge - averageAge);

    console.log("Min Age:", minAge);
    console.log("Max Age:", maxAge);
    console.log("Median Age:", medianAge);
    console.log("Average Age:", averageAge);
    console.log("Age Range:", ageRange);
    console.log("Difference (Min - Avg):", diffMinAvg);
    console.log("Difference (Max - Avg):", diffMaxAvg);
    ```

2. Find the middle country(ies) in the [countries array](https://github.com/manthanank/30daysof-javascript-excercise/blob/main/Day5/countries.js)

    ```jsx
    const countries = require('./countries');

    const middleIndex = Math.floor(countries.length / 2);

    if (countries.length % 2 === 0) {
        const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
        console.log("Middle Countries:", middleCountries);
    } else {
        const middleCountry = countries[middleIndex];
        console.log("Middle Country:", middleCountry);
    }
    ```

3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

    ```jsx
    const countries = require('./countries');

    const middleIndex = Math.floor(countries.length / 2);

    if (countries.length % 2 === 0) {
        const firstHalf = countries.slice(0, middleIndex);
        const secondHalf = countries.slice(middleIndex);
        console.log("First Half:", firstHalf);
        console.log("Second Half:", secondHalf);
    } else {
        const firstHalf = countries.slice(0, middleIndex + 1);
        const secondHalf = countries.slice(middleIndex + 1);
        console.log("First Half:", firstHalf);
        console.log("Second Half:", secondHalf);
    }
    ```

🎉 ✅Completed 🎉

[<< Day 4](/Day04/index.md) | [Day 6 >>](/Day06/index.md)
