<div align="center">
  <h1> Day 8: Objects.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

Level : 1

1. Create an empty object called dog

    ```jsx
    let dog = {};
    ```

2. Print the the dog object on the console

    ```jsx
    console.log(dog);
    ```

3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

    ```jsx
    dog.name = "Max";
    dog.legs = 4;
    dog.color = "brown";
    dog.age = 3;
    dog.bark = function() {
      return "woof woof";
    };
    ```

4. Get name, legs, color, age and bark value from the dog object

    ```jsx
    console.log(dog.name); // Output: Max
    console.log(dog.legs); // Output: 4
    console.log(dog.color); // Output: brown
    console.log(dog.age); // Output: 3
    console.log(dog.bark()); // Output: woof woof
    ```

5. Set new properties the dog object: breed, getDogInfo

    ```jsx
    dog.breed = "Labrador Retriever";
    dog.getDogInfo = function() {
      return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}`;
    };
    ```

Level : 2

1. Find the person who has many skills in the users object.

    ```jsx
    let users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    };

    let maxSkills = 0;
    let skilledPerson = '';

    for (let user in users) {
      if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        skilledPerson = user;
      }
    }

    console.log(skilledPerson); // Output: Asab
    ```

2. Count logged in users, count users having greater than equal to 50 points from the following object.

    ```jsx
    const users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }
    ```

    ```jsx
    let loggedInUsers = 0;
    let usersWith50Points = 0;

    for (let user in users) {
      if (users[user].isLoggedIn) {
        loggedInUsers++;
      }
      if (users[user].points >= 50) {
        usersWith50Points++;
      }
    }

    console.log(loggedInUsers); // Output: 2
    console.log(usersWith50Points); // Output: 4
    ```

3. Find people who are MERN stack developer from the users object

    ```jsx
    let mernStackDevelopers = [];

    for (let user in users) {
      if (
        users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Node')
      ) {
        mernStackDevelopers.push(user);
      }
    }

    console.log(mernStackDevelopers); // Output: ["Asab", "Brook", "Paul"]
    ```

4. Set your name in the users object without modifying the original users object

    ```jsx
    let myName = "John";

    let updatedUsers = { ...users, John: { ...users.John, name: myName } };

    console.log(updatedUsers);
    ```

5. Get all keys or properties of users object

    ```jsx
    let keys = Object.keys(users);
    console.log(keys);
    ```

6. Get all the values of users object

    ```jsx
    let values = Object.values(users);
    console.log(values);
    ```

7. Use the countries object to print a country name, capital, populations and languages.

    ```jsx
    const countries = {
      Afghanistan: {
        capital: 'Kabul',
        population: 27657145,
        languages: ['Pashto', 'Dari']
      },
      Finland: {
        capital: 'Helsinki',
        population: 5491817,
        languages: ['Finnish', 'Swedish']
      },
      India: {
        capital: 'New Delhi',
        population: 1303171035,
        languages: ['Hindi', 'English']
      },
      UnitedStates: {
        capital: 'Washington, D.C.',
        population: 323947000,
        languages: ['English']
      }
    };

    for (let country in countries) {
      console.log(`Country: ${country}`);
      console.log(`Capital: ${countries[country].capital}`);
      console.log(`Population: ${countries[country].population}`);
      console.log(`Languages: ${countries[country].languages.join(', ')}`);
      console.log('---');
    }
    ```

Level : 3

1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

    ```jsx
    let personAccount = {
      firstName: 'John',
      lastName: 'Doe',
      incomes: [],
      expenses: [],

      addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
      },

      addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
      },

      totalIncome: function() {
        let total = 0;
        for (let income of this.incomes) {
          total += income.amount;
        }
        return total;
      },

      totalExpense: function() {
        let total = 0;
        for (let expense of this.expenses) {
          total += expense.amount;
        }
        return total;
      },

      accountInfo: function() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}`;
      },

      accountBalance: function() {
        let balance = this.totalIncome() - this.totalExpense();
        return `Balance: ${balance}`;
      }
    };
    ```

2. Questions:2, 3 and 4 are based on the following two arrays:users and products ()

    ```jsx
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
      {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
      },
      {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
      },
      {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
      }
    ]
    ```

    Imagine you are getting the above users collection from a MongoDB database.

    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

    ```jsx
    function signUp(user) {
      for (let existingUser of users) {
        if (existingUser.email === user.email) {
          return 'User already has an account.';
        }
      }
      users.push(user);
      return 'User added successfully.';
    }

    let newUser = {
      _id: 'abc123',
      username: 'JohnDoe',
      email: 'johndoe@gmail.com',
      password: 'password123',
      createdAt: '08/01/2020 11:00 AM',
      isLoggedIn: false
    };

    console.log(signUp(newUser)); // Output: User added successfully.
    console.log(users);
    ```

    b. Create a function called signIn which allows user to sign in to the application

    ```jsx
    function signIn(email, password) {
      for (let user of users) {
        if (user.email === email && user.password === password) {
          user.isLoggedIn = true;
          return 'User logged in successfully.';
        }
      }
      return 'Invalid email or password.';
    }

    console.log(signIn('johndoe@gmail.com', 'password123')); // Output: User logged in successfully.
    console.log(users);
    ```

3. The products array has three elements and each of them has six properties.

    a. Create a function called rateProduct which rates the product

    ```jsx
    function rateProduct(productId, userId, rating) {
      for (let product of products) {
        if (product._id === productId) {
          product.ratings.push({ userId, rate: rating });
          return 'Product rated successfully.';
        }
      }
      return 'Product not found.';
    }

    console.log(rateProduct('aegfal', 'zwf8md', 4)); // Output: Product rated successfully.
    console.log(products);
    ```

    b. Create a function called averageRating which calculate the average rating of a product

    ```jsx
    function averageRating(productId) {
      for (let product of products) {
        if (product._id === productId) {
          if (product.ratings.length === 0) {
            return 'No ratings available.';
          }
          let totalRating = 0;
          for (let rating of product.ratings) {
            totalRating += rating.rate;
          }
          return totalRating / product.ratings.length;
        }
      }
      return 'Product not found.';
    }

    console.log(averageRating('aegfal')); // Output: 4
    console.log(products);
    ```

4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

    ```jsx
    function likeProduct(productId, userId) {
      for (let product of products) {
        if (product._id === productId) {
          if (product.likes.includes(userId)) {
            product.likes = product.likes.filter(id => id !== userId);
            return 'Like removed.';
          } else {
            product.likes.push(userId);
            return 'Product liked.';
          }
        }
      }
      return 'Product not found.';
    }

    console.log(likeProduct('aegfal', 'fg12cy')); // Output: Like removed.
    console.log(products);
    console.log(likeProduct('aegfal', 'fg12cy')); // Output: Product liked.
    console.log(products);
    ```

🎉 ✅Completed 🎉

[<< Day 7](/Day7/Day7.md) | [Day 9 >>](/Day9/Day9.md)
