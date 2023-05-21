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

    ```

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

    ```jsx

    ```

3. Iterate 0 to n using for loop

    ```jsx

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

    ```

7. Use for loop to iterate from 0 to 100 and print only even numbers

    ```jsx

    ```

8. Use for loop to iterate from 0 to 100 and print only odd numbers

    ```jsx

    ```

9. Use for loop to iterate from 0 to 100 and print only prime numbers

    ```jsx

    ```

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    The sum of all numbers from 0 to 100 is 5050.

    ```jsx

    ```

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

    ```jsx

    ```

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    [2550, 2500]

    ```jsx

    ```

13. Develop a small script which generate array of 5 random numbers

    ```jsx

    ```

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

    ```jsx

    ```

15. Develop a small script which generate a six characters random id:

    5j2khz

    ```jsx

    ```

Level : 2

1. Develop a small script which generate any number of characters random id:

    fe3jo1gl124g

    xkqci4utda1lmbelpkm03rba

    ```jsx

    ```

2. Write a script which generates a random hexadecimal number.

    '#ee33df'

    ```jsx

    ```

3. Write a script which generates a random rgb color number.

    rgb(240,180,80)

    ```jsx

    ```

4. Using the above countries array, create the following new array.

    ```jsx

    ```

5. Using the above countries array, create an array for countries length'.

    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

    ```jsx

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

    ```

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    ['Finland','Ireland', 'Iceland']

    ```jsx

    ```

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ['Albania', 'Bolivia','Ethiopia']

    ```jsx

    ```

9. Using the above countries array, find the country containing the biggest number of characters.

    Ethiopia

    ```jsx

    ```

10. Using the above countries array, find the country containing only 5 characters.

    ['Japan', 'Kenya']

    ```jsx

    ```

11. Find the longest word in the webTechs array

    ```jsx

    ```

12. Use the webTechs array to create the following array of arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

    ```jsx

    ```

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

    ```jsx

    ```

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

    ```jsx

    ```

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

    ```jsx

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

    ```

Level : 3

1. Copy countries array(Avoid mutation)

    ```jsx

    ```

2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

    ```jsx

    ```

3. Sort the webTechs array and mernStack array

    ```jsx

    ```

4. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```jsx

    ```

5. Find the country containing the hightest number of characters in the countries array

    ```jsx

    ```

6. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```jsx

    ```

7. Extract all the countries containing only four characters from the countries array and print it as array

    ```jsx

    ```

8. Extract all the countries containing two or more words from the countries array and print it as array

    ```jsx

    ```

9. Reverse the countries array and capitalize each country and stored it as an array

    ```jsx

    ```

🎉 ✅Completed 🎉

[<< Day 5](/Day5/Day5.md) | [Day 7 >>](/Day7/Day7.md)
