<div align="center">
  <h1> Day 9: Higher Order Functions.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
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

    ```jsx
    forEach: forEach is a method that executes a provided callback function once for each element in an array. It iterates over each element and does not return a new array. It is used for performing a specific operation on each element of an array.

    map: map is a method that creates a new array by calling a provided callback function on every element in the array. It returns a new array with the same length as the original array, where each element is the result of the callback function. It is used for transforming each element of an array.

    filter: filter is a method that creates a new array with all the elements that pass a test implemented by the provided callback function. It iterates over each element and includes only the elements for which the callback function returns true. It is used for selecting elements from an array based on a condition.

    reduce: reduce is a method that applies a callback function on each element of an array, resulting in a single output value. It iterates over the elements and accumulates a single value by repeatedly calling the callback function with the current value and the next element. It is used for aggregating the elements of an array into a single value.
    ```

2. Define a callback function before you use it in forEach, map, filter or reduce.

    ```jsx
    // Callback function definition
    function callback(element) {
      // Function body
      // Perform some action on the element
    }

    // Using the callback function in forEach
    array.forEach(callback);
    ```

3. Use forEach to console.log each country in the countries array.

    ```jsx
    countries.forEach(function(country) {
      console.log(country);
    });
    ```

4. Use forEach to console.log each name in the names array.

    ```jsx
    names.forEach(function(name) {
      console.log(name);
    });
    ```

5. Use forEach to console.log each number in the numbers array.

    ```jsx
    numbers.forEach(function(number) {
      console.log(number);
    });
    ```

6. Use map to create a new array by changing each country to uppercase in the countries array.

    ```jsx
    const uppercaseCountries = countries.map(function(country) {
      return country.toUpperCase();
    });

    console.log(uppercaseCountries);
    ```

7. Use map to create an array of countries length from countries array.

    ```jsx
    const countriesLength = countries.map(function(country) {
      return country.length;
    });

    console.log(countriesLength);
    ```

8. Use map to create a new array by changing each number to square in the numbers array

    ```jsx
    const squaredNumbers = numbers.map(function(number) {
      return number * number;
    });

    console.log(squaredNumbers);
    ```

9. Use map to change to each name to uppercase in the names array

    ```jsx
    const uppercaseNames = names.map(function(name) {
      return name.toUpperCase();
    });

    console.log(uppercaseNames);
    ```

10. Use map to map the products array to its corresponding prices.

    ```jsx
    const prices = products.map(function(product) {
      return product.price;
    });

    console.log(prices);
    ```

11. Use filter to filter out countries containing land.

    ```jsx
    const countriesWithLand = countries.filter(function(country) {
      return country.includes("land");
    });

    console.log(countriesWithLand);
    ```

12. Use filter to filter out countries having six character.

    ```jsx
    const sixCharacterCountries = countries.filter(function(country) {
      return country.length === 6;
    });

    console.log(sixCharacterCountries);
    ```

13. Use filter to filter out countries containing six letters and more in the country array.

    ```jsx
    const sixLetterCountries = countries.filter(function(country) {
      return country.length >= 6;
    });

    console.log(sixLetterCountries);
    ```

14. Use filter to filter out country start with 'E';

    ```jsx
    const countriesStartingWithE = countries.filter(function(country) {
      return country.startsWith("E");
    });

    console.log(countriesStartingWithE);
    ```

15. Use filter to filter out only prices with values.

    ```jsx
    const validPrices = products.filter(function(product) {
      return typeof product.price === "number";
    });

    console.log(validPrices);
    ```

16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

    ```jsx
    function getStringLists(array) {
        return array.filter(function(item) {
            return typeof item === "string";
        });
    }

    console.log(getStringLists([1, 'hello', true, 'world', 5]));
    ```

17. Use reduce to sum all the numbers in the numbers array.

    ```jsx
    const sum = numbers.reduce(function(acc, number) {
        return acc + number;
    }, 0);

    console.log(sum);
    ```

18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

    ```jsx
    const concatenatedCountries = countries.reduce(function(acc, country, index) {
        if (index === countries.length - 1) {
            return acc + 'and ' + country;
        } else {
            return acc + country + ', ';
        }
    }, '');

    console.log(concatenatedCountries + ' are north European countries.');
    ```

19. Explain the difference between some and every

    ```jsx
    some: The some method checks if at least one element in the array satisfies a provided condition implemented by the callback function. It returns true if any element satisfies the condition, otherwise false.
    
    every: The every method checks if all elements in the array satisfy a provided condition implemented by the callback function. It returns true if all elements satisfy the condition, otherwise false.
    ```

20. Use some to check if some names' length greater than seven in names array

    ```jsx
    const hasNameGreaterThanSeven = names.some(function(name) {
        return name.length > 7;
    });

    console.log(hasNameGreaterThanSeven);
    ```

21. Use every to check if all the countries contain the word land

    ```jsx
    const allCountriesContainLand = countries.every(function(country) {
        return country.includes("land");
    });

    console.log(allCountriesContainLand);
    ```

22. Explain the difference between find and findIndex.

    ```jsx
    find: The find method returns the first element in the array that satisfies a provided condition implemented by the callback function. It returns undefined if no element satisfies the condition.

    findIndex: The findIndex method returns the index of the first element in the array that satisfies a provided condition implemented by the callback function. It returns -1 if no element satisfies the condition.
    ```

23. Use find to find the first country containing only six letters in the countries array

    ```jsx
    const sixLetterCountry = countries.find(function(country) {
        return country.length === 6;
    });

    console.log(sixLetterCountry);
    ```

24. Use findIndex to find the position of the first country containing only six letters in the countries array

    ```jsx
    const sixLetterCountryIndex = countries.findIndex(function(country) {
        return country.length === 6;
    });

    console.log(sixLetterCountryIndex);
    ```

25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

    ```jsx
    const norwayIndex = countries.findIndex(function(country) {
        return country === "Norway";
    });

    console.log(norwayIndex);
    ```

26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

    ```jsx
    const russiaIndex = countries.findIndex(function(country) {
        return country === "Russia";
    });

    console.log(russiaIndex);
    ```

Level : 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

    ```jsx
    const totalPrice = products
        .filter(function(product) {
            return typeof product.price === 'number';
        })
        .map(function(product) {
            return product.price;
        })
        .reduce(function(acc, price) {
            return acc + price;
    }, 0);

    console.log(totalPrice);
    ```

2. Find the sum of price of products using only reduce reduce(callback))

    ```jsx
    const sumOfPrices = products.reduce(function(acc, product) {
        if (typeof product.price === 'number') {
            return acc + product.price;
        }
        return acc;
    }, 0);

    console.log(sumOfPrices);
    ```

3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

    ```jsx
    function categorizeCountries(pattern) {
        return countries.filter(function(country) {
            return country.includes(pattern);
        });
    }

    console.log(categorizeCountries('land')); // Countries containing 'land' pattern
    console.log(categorizeCountries('ia')); // Countries containing 'ia' pattern
    console.log(categorizeCountries('island')); // Countries containing 'island' pattern
    console.log(categorizeCountries('stan')); // Countries containing 'stan' pattern
    ```

4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

    ```jsx
    function getInitialLetterCount() {
        const initialLetterCount = {};
        countries.forEach(function(country) {
            const initialLetter = country[0].toUpperCase();
            if (initialLetterCount.hasOwnProperty(initialLetter)) {
            initialLetterCount[initialLetter]++;
            } else {
            initialLetterCount[initialLetter] = 1;
            }
        });
        return Object.entries(initialLetterCount).map(function([letter, count]) {
            return { letter, count };
        });
    }

    console.log(getInitialLetterCount());
    ```

5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

    ```jsx
    function getFirstTenCountries() {
        return countries.slice(0, 10);
    }

    console.log(getFirstTenCountries());
    ```

6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

    ```jsx
    function getLastTenCountries() {
        return countries.slice(-10);
    }

    console.log(getLastTenCountries());
    ```

7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

    ```jsx
    function findMostFrequentInitialLetter() {
        const initialLetterCount = {};
        countries.forEach(function(country) {
            const initialLetter = country[0].toUpperCase();
            if (initialLetterCount.hasOwnProperty(initialLetter)) {
            initialLetterCount[initialLetter]++;
            } else {
            initialLetterCount[initialLetter] = 1;
            }
        });
        let mostFrequentLetter;
        let maxCount = 0;
        Object.entries(initialLetterCount).forEach(function([letter, count]) {
            if (count > maxCount) {
            mostFrequentLetter = letter;
            maxCount = count;
            }
        });
        return mostFrequentLetter;
    }

    console.log(findMostFrequentInitialLetter());
    ```

Level : 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

    ```jsx
    // Sort countries by name
    const countriesByName = countries.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    console.log(countriesByName);

    // Sort countries by capital
    const countriesByCapital = countries.sort(function(a, b) {
        return a.capital.localeCompare(b.capital);
    });
    console.log(countriesByCapital);

    // Sort countries by population
    const countriesByPopulation = countries.sort(function(a, b) {
        return b.population - a.population;
    });
    console.log(countriesByPopulation);
    ```

2. Find the 10 most spoken languages:

    ```jsx
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
    ]
    ```

    ```jsx
    function mostSpokenLanguages(countries, count) {
        const languageCount = {};
        countries.forEach(function(country) {
            country.languages.forEach(function(language) {
            if (languageCount.hasOwnProperty(language)) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
            });
        });
        const sortedLanguages = Object.entries(languageCount).sort(function(a, b) {
            return b[1] - a[1];
        });
        return sortedLanguages.slice(0, count).map(function([language, count]) {
            return { country: language, count };
        });
    }

    console.log(mostSpokenLanguages(countries, 10));
    console.log(mostSpokenLanguages(countries, 3));
    ```

3. Use countries_data.js file create a function which create the ten most populated countries

    ```jsx
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

    ```jsx
    function mostPopulatedCountries(countries, count) {
        return countries
            .sort(function(a, b) {
                return b.population - a.population;
            })
            .slice(0, count)
            .map(function(country) {
                return { country: country.name, population: country.population };
            });
    }

    console.log(mostPopulatedCountries(countries, 10));
    console.log(mostPopulatedCountries(countries, 3));
    ```

4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

    ```jsx
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    console.log('Count:', statistics.count()) // 25

    console.log('Sum: ', statistics.sum()) // 744

    console.log('Min: ', statistics.min()) // 24

    console.log('Max: ', statistics.max()) // 38

    console.log('Range: ', statistics.range()) // 14

    console.log('Mean: ', statistics.mean()) // 30

    console.log('Median: ',statistics.median()) // 29

    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}

    console.log('Variance: ',statistics.var()) // 17.5

    console.log('Standard Deviation: ', statistics.std()) // 4.2

    console.log('Variance: ',statistics.var()) // 17.5

    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ```

    ```jsx
    const statistics = {
        data: [],
        addData: function(newData) {
            this.data = this.data.concat(newData);
        },
        count: function() {
            return this.data.length;
        },
        sum: function() {
            return this.data.reduce(function(acc, num) {
            return acc + num;
            }, 0);
        },
        min: function() {
            return Math.min(...this.data);
        },
        max: function() {
            return Math.max(...this.data);
        },
        range: function() {
            return this.max() - this.min();
        },
        mean: function() {
            return this.sum() / this.count();
        },
        median: function() {
            const sortedData = this.data.sort(function(a, b) {
            return a - b;
            });
            const middleIndex = Math.floor(this.count() / 2);
            if (this.count() % 2 === 0) {
            return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
            } else {
            return sortedData[middleIndex];
            }
        },
        mode: function() {
            const numberCount = {};
            this.data.forEach(function(num) {
            if (numberCount.hasOwnProperty(num)) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
            });
            let mode;
            let maxCount = 0;
            Object.entries(numberCount).forEach(function([num, count]) {
            if (count > maxCount) {
                mode = Number(num);
                maxCount = count;
            }
            });
            return { mode, count: maxCount };
        },
        var: function() {
            const mean = this.mean();
            const squaredDifferences = this.data.map(function(num) {
            return Math.pow(num - mean, 2);
            });
            return squaredDifferences.reduce(function(acc, num) {
            return acc + num;
            }, 0) / this.count();
        },
        std: function() {
            return Math.sqrt(this.var());
        },
        freqDist: function() {
            const frequencyCount = {};
            this.data.forEach(function(num) {
            if (frequencyCount.hasOwnProperty(num)) {
                frequencyCount[num]++;
            } else {
                frequencyCount[num] = 1;
            }
            });
            return Object.entries(frequencyCount).map(function([num, count]) {
            return [Number(num), count];
            });
        }
    };

    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

    statistics.addData(ages);

    console.log('Count:', statistics.count());
    console.log('Sum:', statistics.sum());
    console.log('Min:', statistics.min());
    console.log('Max:', statistics.max());
    console.log('Range:', statistics.range());
    console.log('Mean:', statistics.mean());
    console.log('Median:', statistics.median());
    console.log('Mode:', statistics.mode());
    console.log('Variance:', statistics.var());
    console.log('Standard Deviation:', statistics.std());
    console.log('Frequency Distribution:', statistics.freqDist());
    ```

🎉 ✅Completed 🎉

[<< Day 8](/Day8/Day8.md) | [Day 10 >>](/Day10/Day10.md)
