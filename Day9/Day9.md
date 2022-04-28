<div align="center">
  <h1> 30 Days Of JavaScript: </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/" target="_blank">Manthan Ankolekar</a><br>
  </sub>
</div>

Level : 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

1. Explain the difference between forEach, map, filter, and reduce.

2. Define a callback function before you use it in forEach, map, filter or reduce.

3. Use forEach to console.log each country in the countries array.

4. Use forEach to console.log each name in the names array.

5. Use forEach to console.log each number in the numbers array.

6. Use map to create a new array by changing each country to uppercase in the countries array.

7. Use map to create an array of countries length from countries array.

8. Use map to create a new array by changing each number to square in the numbers array

9. Use map to change to each name to uppercase in the names array

10. Use map to map the products array to its corresponding prices.

11. Use filter to filter out countries containing land.

12. Use filter to filter out countries having six character.

13. Use filter to filter out countries containing six letters and more in the country array.

14. Use filter to filter out country start with 'E';

15. Use filter to filter out only prices with values.

16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

17. Use reduce to sum all the numbers in the numbers array.

18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

19. Explain the difference between some and every

20. Use some to check if some names' length greater than seven in names array

21. Use every to check if all the countries contain the word land

22. Explain the difference between find and findIndex.

23. Use find to find the first country containing only six letters in the countries array

24. Use findIndex to find the position of the first country containing only six letters in the countries array

25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

Level : 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

2. Find the sum of price of products using only reduce reduce(callback))

3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

Level : 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

2. *** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```

3. *** Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
```

4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


🎉 COMPLETED ! 🎉

[Day 10 >>](./Day10/Day10.md)