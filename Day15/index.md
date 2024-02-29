<div align="center">
  <h1> Day 15: Error handling.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

    ```jsx
    class Animal {
      constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
      }

      eat(food) {
        console.log(`${this.name} is eating ${food}.`);
      }

      sleep() {
        console.log(`${this.name} is sleeping.`);
      }

      speak(sound) {
        console.log(`${this.name} says ${sound}!`);
      }
    }
    ```

2. Create a Dog and Cat child class from the Animal Class.

    ```jsx
    class Dog extends Animal {
      constructor(name, age, color) {
        super(name, age, color, 4);
      }

      wagTail() {
        console.log(`${this.name} is wagging its tail.`);
      }
    }

    class Cat extends Animal {
      constructor(name, age, color) {
        super(name, age, color, 4);
      }

      purr() {
        console.log(`${this.name} is purring.`);
      }
    }
    ```

## Level : 2

1. Override the method you create in Animal class

    ```jsx
    class Animal {
      // ...

      speak() {
        console.log(`${this.name} makes a sound.`);
      }
    }

    class Dog extends Animal {
      // ...

      speak() {
        console.log(`${this.name} barks!`);
      }
    }

    class Cat extends Animal {
      // ...

      speak() {
        console.log(`${this.name} meows!`);
      }
    }
    ```

## Level : 3

1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

    ```jsx
    ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    ```

    ```jsx
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
    console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ````

    ```jsx
    // you output should look like this
    console.log(statistics.describe())
    Count: 25
    Sum:  744
    Min:  24
    Max:  38
    Range:  14
    Mean:  30
    Median:  29
    Mode:  (26, 5)
    Variance:  17.5
    Standard Deviation:  4.2
    Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ```

    ```jsx
    class Statistics {
      constructor(data) {
        this.data = data;
      }

      count() {
        return this.data.length;
      }

      sum() {
        return this.data.reduce((total, num) => total + num, 0);
      }

      min() {
        return Math.min(...this.data);
      }

      max() {
        return Math.max(...this.data);
      }

      range() {
        return this.max() - this.min();
      }

      mean() {
        return this.sum() / this.count();
      }

      median() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedData.length / 2);

        if (sortedData.length % 2 === 0) {
          return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
        } else {
          return sortedData[middleIndex];
        }
      }

      mode() {
        const frequencyMap = new Map();
        let maxFrequency = 0;
        let modeValue = null;

        for (const value of this.data) {
          let frequency = frequencyMap.get(value) || 0;
          frequencyMap.set(value, frequency + 1);

          if (frequency + 1 > maxFrequency) {
            maxFrequency = frequency + 1;
            modeValue = value;
          }
        }

        return { mode: modeValue, count: maxFrequency };
      }

      variance() {
        const mean = this.mean();
        const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
        const sumOfSquaredDiff = squaredDifferences.reduce((total, num) => total + num, 0);
        return sumOfSquaredDiff / this.count();
      }

      std() {
        return Math.sqrt(this.variance());
      }

      freqDist() {
        const frequencyMap = new Map();

        for (const value of this.data) {
          let frequency = frequencyMap.get(value) || 0;
          frequencyMap.set(value, frequency + 1);
        }

        const freqDist = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);

        return freqDist.map(([value, count]) => [count / this.count() * 100, value]);
      }
    }

    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    const statistics = new Statistics(ages);

    console.log('Count:', statistics.count()); // 25
    console.log('Sum: ', statistics.sum()); // 744
    console.log('Min: ', statistics.min()); // 24
    console.log('Max: ', statistics.max()); // 38
    console.log('Range: ', statistics.range()); // 14
    console.log('Mean: ', statistics.mean()); // 30
    console.log('Median: ', statistics.median()); // 29
    console.log('Mode: ', statistics.mode()); // { mode: 26, count: 5 }
    console.log('Variance: ', statistics.variance()); // 17.5
    console.log('Standard Deviation: ', statistics.std()); // 4.2
    console.log('Frequency Distribution: ', statistics.freqDist()); // [[20.0, 26], [16.0, 27], [12.0, 32], [8.0, 37], [8.0, 34], [8.0, 33], [8.0, 31], [8.0, 24], [4.0, 38], [4.0, 29], [4.0, 25]]
    ```

2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

    ```jsx
    class PersonAccount {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = new Map();
        this.expenses = new Map();
      }

      totalIncome() {
        let total = 0;
        for (const [amount] of this.incomes.values()) {
          total += amount;
        }
        return total;
      }

      totalExpense() {
        let total = 0;
        for (const [amount] of this.expenses.values()) {
          total += amount;
        }
        return total;
      }

      accountInfo() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Total Income: $${this.totalIncome()}`);
        console.log(`Total Expense: $${this.totalExpense()}`);
        console.log(`Account Balance: $${this.accountBalance()}`);
      }

      addIncome(description, amount) {
        this.incomes.set(description, amount);
        console.log(`Income added - Description: ${description}, Amount: $${amount}`);
      }

      addExpense(description, amount) {
        this.expenses.set(description, amount);
        console.log(`Expense added - Description: ${description}, Amount: $${amount}`);
      }

      accountBalance() {
        return this.totalIncome() - this.totalExpense();
      }
    }

    const person = new PersonAccount('John', 'Doe');
    person.addIncome('Salary', 3000);
    person.addIncome('Bonus', 500);
    person.addExpense('Rent', 1000);
    person.addExpense('Groceries', 200);
    person.accountInfo();
    ```

🎉 ✅Completed 🎉

[<< Day 14](/Day14/index.md) | [Day 16 >>](/Day16/index.md)
