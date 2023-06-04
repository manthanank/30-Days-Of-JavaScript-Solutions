<div align="center">
  <h1> Day 13: Console Object Methods.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

1. Display the countries array as a table

    ```jsx
    console.table(countries);
    ```

2. Display the countries object as a table

    ```jsx
    console.table(countries);
    ```

3. Use console.group() to group logs

    ```jsx
    console.group("Group Name");
    console.log("Log 1");
    console.log("Log 2");
    console.groupEnd();
    ```

## Level : 2

1. 10 > 2 * 10 use console.assert()

    ```jsx
    console.assert(10 > 2 * 10, "Assertion failed: 10 is not greater than 2 * 10");
    ```

2. Write a warning message using console.warn()

    ```jsx
    console.warn("This is a warning message");
    ```

3. Write an error message using console.error()

    ```jsx
    console.error("This is an error message");
    ```

## Level : 3

1. Check the speed difference among the following loops: while, for, for of, forEach

    ```jsx
    const arr = [1, 2, 3, 4, 5];

    console.time("while");
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
    console.timeEnd("while");

    console.time("for");
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    console.timeEnd("for");

    console.time("for of");
    for (const element of arr) {
      console.log(element);
    }
    console.timeEnd("for of");

    console.time("forEach");
    arr.forEach((element) => {
      console.log(element);
    });
    console.timeEnd("forEach");
    ```

🎉 ✅Completed 🎉

[<< Day 12](/Day12/Day12.md) | [Day 14 >>](/Day14/Day14.md)
