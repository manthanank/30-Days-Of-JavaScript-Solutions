<div align="center">
  <h1> Day 19: Closures.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

1. Create a closure which has one inner function

    ```jsx
    function outerFunction() {
      const message = 'Hello';

      function innerFunction() {
        console.log(message);
      }

      return innerFunction;
    }

    const closure = outerFunction();
    closure(); // Output: Hello
    ```

## Level : 2

1. Create a closure which has three inner functions

    ```jsx
    function outerFunction() {
      const message = 'Hello';

      function firstInnerFunction() {
        console.log(message);
      }

      function secondInnerFunction() {
        console.log('World');
      }

      function thirdInnerFunction() {
        console.log('!');
      }

      return {
        first: firstInnerFunction,
        second: secondInnerFunction,
        third: thirdInnerFunction
      };
    }

    const closure = outerFunction();
    closure.first(); // Output: Hello
    closure.second(); // Output: World
    closure.third(); // Output: !
    ```

## Level : 3

1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

    ```jsx
    function personAccount(firstName, lastName) {
      let incomes = [];
      let expenses = [];

      function addIncome(description, amount) {
        incomes.push({ description, amount });
      }

      function addExpense(description, amount) {
        expenses.push({ description, amount });
      }

      function totalIncome() {
        let total = 0;
        for (let income of incomes) {
          total += income.amount;
        }
        return total;
      }

      function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
          total += expense.amount;
        }
        return total;
      }

      function accountInfo() {
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Total Income: ${totalIncome()}`);
        console.log(`Total Expense: ${totalExpense()}`);
        console.log(`Account Balance: ${totalIncome() - totalExpense()}`);
      }

      return {
        addIncome,
        addExpense,
        accountInfo
      };
    }

    const johnDoeAccount = personAccount('John', 'Doe');
    johnDoeAccount.addIncome('Salary', 3000);
    johnDoeAccount.addExpense('Rent', 1000);
    johnDoeAccount.addExpense('Food', 500);
    johnDoeAccount.accountInfo();
    ```

🎉 ✅Completed 🎉

[<< Day 18](/Day18/index.md) | [Day 20 >>](/Day20/index.md)
