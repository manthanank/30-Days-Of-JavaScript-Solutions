<div align="center">
  <h1> Day 16: JSON.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

1. Store you first name, last name, age, country, city in your browser localStorage.

    ```jsx
    // Store first name, last name, age, country, city in localStorage
    localStorage.setItem('firstName', 'John');
    localStorage.setItem('lastName', 'Doe');
    localStorage.setItem('age', '25');
    localStorage.setItem('country', 'USA');
    localStorage.setItem('city', 'New York');
    ```

## Level : 2

1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

    ```jsx
    // Create a student object and store it in localStorage
    const student = {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      skills: ['JavaScript', 'HTML', 'CSS'],
      country: 'USA',
      enrolled: true
    };

    localStorage.setItem('student', JSON.stringify(student));
    ```

## Level : 3

1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

    ```jsx
    // Create personAccount object with methods and properties
    const personAccount = {
      firstName: 'John',
      lastName: 'Doe',
      incomes: new Set(),
      expenses: new Set(),

      totalIncome() {
        let total = 0;
        for (let income of this.incomes) {
          total += income;
        }
        return total;
      },

      totalExpense() {
        let total = 0;
        for (let expense of this.expenses) {
          total += expense;
        }
        return total;
      },

      accountInfo() {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
      },

      addIncome(description, amount) {
        this.incomes.add(amount);
        console.log(`Income added - Description: ${description}, Amount: ${amount}`);
      },

      addExpense(description, amount) {
        this.expenses.add(amount);
        console.log(`Expense added - Description: ${description}, Amount: ${amount}`);
      },

      accountBalance() {
        return this.totalIncome() - this.totalExpense();
      }
    };

    personAccount.addIncome('Salary', 5000);
    personAccount.addExpense('Rent', 1500);

    console.log(personAccount.accountBalance());
    console.log(personAccount.accountInfo());
    ```

🎉 ✅Completed 🎉

[<< Day 16](/Day16/Day16.md) | [Day 18 >>](/Day18/Day18.md)
