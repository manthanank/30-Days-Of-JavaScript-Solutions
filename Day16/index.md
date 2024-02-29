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

```jsx
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

1. Change skills array to JSON using JSON.stringify()

    ```jsx
    const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
    const skillsJSON = JSON.stringify(skills)
    console.log(skillsJSON) // ["HTML","CSS","JS","React","Node","Python"]
    ```

2. Stringify the age variable

    ```jsx
    const age = 250;
    const ageJSON = JSON.stringify(age)
    console.log(ageJSON) // 250
    ```

3. Stringify the isMarried variable

    ```jsx
    const isMarried = true;
    const isMarriedJSON = JSON.stringify(isMarried)
    console.log(isMarriedJSON) // true
    ```

4. Stringify the student object

    ```jsx
    const student = {
        firstName:'Asabeneh',
        lastName:'Yetayehe',
        age:250,
        isMarried:true,
        skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
    }

    const studentJSON = JSON.stringify(student)
    console.log(studentJSON) // {"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}
    ```

## Level : 2

1. Stringify the students object with only firstName, lastName and skills properties

    ```jsx
    const students = {
        Alex: {
            email: "alex@alex.com",
            skills: ["HTML", "CSS", "JavaScript"],
            age: 20,
            isLoggedIn: false,
            points: 30,
        },
        Asab: {
            email: "asab@asab.com",
            skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
            ],
            age: 25,
            isLoggedIn: false,
            points: 50,
        },
        Brook: {
            email: "daniel@daniel.com",
            skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            age: 30,
            isLoggedIn: true,
            points: 50,
        },
        Daniel: {
            email: "daniel@alex.com",
            skills: ["HTML", "CSS", "JavaScript", "Python"],
            age: 20,
            isLoggedIn: false,
            points: 40,
        },
        John: {
            email: "john@john.com",
            skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
            age: 20,
            isLoggedIn: true,
            points: 50,
        },
        Thomas: {
            email: "thomas@thomas.com",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            age: 20,
            isLoggedIn: false,
            points: 40,
        },
        Paul: {
            email: "paul@paul.com",
            skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
            age: 20,
            isLoggedIn: false,
            points: 40,
        },
    };

    const studentsJSON = JSON.stringify(students, ["firstName", "lastName", "skills"]);
    console.log(studentsJSON);
    ```

    ```jsx
    {
        "Alex":{"skills":["HTML","CSS","JavaScript"]},
        "Asab":{"skills":["HTML","CSS","JavaScript","Redux","MongoDB","Express","React","Node"]},
        "Brook":{"skills":["HTML","CSS","JavaScript","React","Redux"]},
        "Daniel":{"skills":["HTML","CSS","JavaScript","Python"]},
        "John":{"skills":["HTML","CSS","JavaScript","React","Redux","Node.js"]},
        "Thomas":{"skills":["HTML","CSS","JavaScript","React"]},
        "Paul":{"skills":["HTML","CSS","JavaScript","MongoDB","Express","React","Node"]}
    }
    ```

## Level : 3

1. Parse the txt JSON to object.

    ```jsx
    const txt = `{
        "Alex": {
            "email": "alex@alex.com",
            "skills": ["HTML", "CSS", "JavaScript"],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": ["HTML", "CSS", "JavaScript", "React", "Redux"],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": ["HTML", "CSS", "JavaScript", "Python"],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": ["HTML", "CSS", "JavaScript", "React"],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }`;

    const txtObj = JSON.parse(txt);
    console.log(txtObj);
    ```

    ```jsx
    {
        Alex: {
            email: 'alex@alex.com',
            skills: [ 'HTML', 'CSS', 'JavaScript' ],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node' ],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: [ 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node' ],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }
    ```

2. Find the user who has many skills from the variable stored in txt.

    ```jsx
    const users = JSON.parse(txt);

    let maxSkills = 0;
    let userWithMaxSkills = null;

    for (let user in users) {
        const userSkills = users[user].skills;
        if (userSkills.length > maxSkills) {
            maxSkills = userSkills.length;
            userWithMaxSkills = user;
        }
    }

    console.log(userWithMaxSkills); //Asab
    ```

🎉 ✅Completed 🎉

[<< Day 15](/Day15/index.md) | [Day 17 >>](/Day17/index.md)
