<div align="center">
  <h1> Day 10: Sets and Maps.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

const a = [4, 5, 8, 9]

const b = [3, 4, 5, 7]

const countries = ['Finland', 'Sweden', 'Norway']

1. create an empty set

    ```jsx
    const emptySet = new Set();
    ```

2. Create a set containing 0 to 10 using loop

    ```jsx
    const numberSet = new Set();

    for (let i = 0; i <= 10; i++) {
        numberSet.add(i);
    }

    console.log(numberSet);
    ```

3. Remove an element from a set

    ```jsx
    numberSet.delete(5);
    console.log(numberSet);
    ```

4. Clear a set

    ```jsx
    numberSet.clear();
    console.log(numberSet);
    ```

5. Create a set of 5 string elements from array

    ```jsx
    const stringArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    const stringSet = new Set(stringArray);
    console.log(stringSet);
    ```

6. Create a map of countries and number of characters of a country

    ```jsx
    const countryMap = new Map();

    for (const country of countries) {
        countryMap.set(country, country.length);
    }

    console.log(countryMap);
    ```

Level : 2

1. Find a union b

    ```jsx
    const setA = new Set([4, 5, 8, 9]);
    const setB = new Set([3, 4, 5, 7]);

    const unionSet = new Set([...setA, ...setB]);
    console.log(unionSet);
    ```

2. Find a intersection b

    ```jsx
    const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
    console.log(intersectionSet);
    ```

3. Find a with b

    ```jsx
    const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
    console.log(differenceSet);
    ```

Level : 3

1. How many languages are there in the countries object file.

    ```jsx
    const languages = new Set();

    for (const country of countries) {
        const countryLanguages = country.languages;
        for (const language of countryLanguages) {
            languages.add(language);
        }
    }

    console.log(languages.size);
    ```

2. Use the countries data to find the 10 most spoken languages:

    ```jsx
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))
    [
      { English: 91 },
      { French: 45 },
      { Arabic: 25 },
      { Spanish: 24 },
      { Russian: 9 },
      { Portuguese: 9 },
      { Dutch: 8 },
      { German: 7 },
      { Chinese: 5 },
      { Swahili: 4 },
      { Serbian: 4 }
    ]
    ```

    ```jsx
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
    [
      {English:91},
      {French:45},
      {Arabic:25}
    ]
    ```

    ```jsx
    function mostSpokenLanguages(countries, count) {
        const languageCount = {};

        for (const country of countries) {
            const countryLanguages = country.languages;
            for (const language of countryLanguages) {
            if (languageCount[language]) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
            }
        }

        const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);
        const mostSpoken = sortedLanguages.slice(0, count);

        const result = mostSpoken.map(([language, count]) => ({ [language]: count }));

        return result;
    }

    console.log(mostSpokenLanguages(countries, 10));
    console.log(mostSpokenLanguages(countries, 3));
    ```

🎉 ✅Completed 🎉

[<< Day 9](/Day9/Day9.md) | [Day 11 >>](/Day11/Day11.md)
