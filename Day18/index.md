<div align="center">
  <h1> Day 18: Promises.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

```jsx
const countriesAPI = 'https://restcountries.com/v2/all'

const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

    ```jsx
    const countriesAPI = 'https://restcountries.com/v2/all';

    fetch(countriesAPI)
      .then(response => response.json())
      .then(data => {
        data.forEach(country => {
          console.log('Name:', country.name);
          console.log('Capital:', country.capital);
          console.log('Languages:', country.languages);
          console.log('Population:', country.population);
          console.log('Area:', country.area);
          console.log('---------------------');
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
    ```

## Level : 2

1. Print out all the cat names in to catNames variable.

    ```jsx
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';

    fetch(catsAPI)
      .then(response => response.json())
      .then(data => {
        const catNames = data.map(cat => cat.name);
        console.log(catNames);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    ```

## Level : 3

1. Read the cats api and find the average weight of cat in metric unit.

    ```jsx
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';

    fetch(catsAPI)
      .then(response => response.json())
      .then(data => {
        const weights = data.map(cat => cat.weight.metric);
        const totalWeights = weights.reduce((total, weight) => total + parseFloat(weight), 0);
        const averageWeight = totalWeights / weights.length;
        console.log('Average Weight:', averageWeight);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    ```

2. Read the countries api and find out the 10 largest countries

    ```jsx
    const countriesAPI = 'https://restcountries.com/v2/all';

    fetch(countriesAPI)
      .then(response => response.json())
      .then(data => {
        const largestCountries = data
          .sort((a, b) => b.area - a.area)
          .slice(0, 10)
          .map(country => country.name);
        console.log('10 Largest Countries:', largestCountries);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    ```

3. Read the countries api and count total number of languages in the world used as officials.

    ```jsx
    const countriesAPI = 'https://restcountries.com/v2/all';

    fetch(countriesAPI)
      .then(response => response.json())
      .then(data => {
        const languagesSet = new Set();

        data.forEach(country => {
          const { languages } = country;
          languages.forEach(language => {
            if (language?.official) {
              languagesSet.add(language.name);
            }
          });
        });

        console.log('Total number of languages:', languagesSet.size);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    ```

🎉 ✅Completed 🎉

[<< Day 17](/Day17/index.md) | [Day 19 >>](/Day19/index.md)
