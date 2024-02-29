<div align="center">
  <h1> Day 11: Destructuring and Spreading.</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/manthan-ankolekar-597b07a8/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/manthan_ank">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/manthan_ank?style=social">
  </a>
</div>

## Level : 1

```jsx
const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
```

1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

    ```jsx
    const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
    console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp); // 2.72 3.14 9.81 37 100
    ```

2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

    ```jsx
    const [fin, est, sw, den, nor] = countries;
    console.log(fin, est, sw, den, nor); // Finland Estonia Sweden Denmark Norway
    ```

3. Destructure the rectangle object by its properties or keys.

    ```jsx
    const { width, height, area, perimeter } = rectangle;
    console.log(width, height, area, perimeter); // 20 10 200 60
    ```

## Level : 2

1. Iterate through the users array and get all the keys of the object using destructuring

    ```jsx
    users.forEach(({ name, scores, skills, age }) => {
      console.log(Object.keys({ name, scores, skills, age }));
    });
    ```

    ```jsx
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ["name", "scores", "skills", "age"]
    ```

2. Find the persons who have less than two skills

    ```jsx
    const lessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);
    console.log(lessThanTwoSkills);
    ```

    ```jsx
    [
     {name: "David", scores: 75, skills: Array(2), age: 22}
     {name: "John", scores: 85, skills: Array(1), age: 25}
    ]
    ```

## Level : 3

1. Destructure the countries object print name, capital, population and languages of all countries

    ```jsx
    const countries = {
      Finland: {
        name: 'Finland',
        capital: 'Helsinki',
        population: 5500000,
        languages: ['Finnish', 'Swedish']
      },
      Estonia: {
        name: 'Estonia',
        capital: 'Tallinn',
        population: 1300000,
        languages: ['Estonian']
      },
      Sweden: {
        name: 'Sweden',
        capital: 'Stockholm',
        population: 10000000,
        languages: ['Swedish']
      },
      Denmark: {
        name: 'Denmark',
        capital: 'Copenhagen',
        population: 5700000,
        languages: ['Danish']
      },
      Norway: {
        name: 'Norway',
        capital: 'Oslo',
        population: 5300000,
        languages: ['Norwegian']
      }
    };

    for (const { name, capital, population, languages } of Object.values(countries)) {
      console.log(name, capital, population, languages);
    }
    ```

    ```jsx
    Finland Helsinki 5500000 ["Finnish", "Swedish"]
    Estonia Tallinn 1300000 ["Estonian"]
    Sweden Stockholm 10000000 ["Swedish"]
    Denmark Copenhagen 5700000 ["Danish"]
    Norway Oslo 5300000 ["Norwegian"]
    ```

2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

    ```jsx
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

    console.log(name, skills, jsScore, reactScore)
    ```

    ```jsx
    David (4) ["HTM", "CSS", "JS", "React"] 90 95
    ```

    ```jsx
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
    const [name, skills, [jsScore, , , reactScore]] = student;
    console.log(name, skills, jsScore, reactScore);
    ```

    ```jsx
    David (4) ["HTM", "CSS", "JS", "React"] 90 95
    ```

3. Write a function called convertArrayToObject which can convert the array to a structure object.

    ```jsx
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))

    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
    ```

    ```jsx
    function convertArrayToObject(students) {
      const convertedArray = [];

      for (const [name, skills, scores] of students) {
        convertedArray.push({ name, skills, scores });
      }

      return convertedArray;
    }

    const students = [
      ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
      ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ];

    console.log(convertArrayToObject(students));
    ```

    ```jsx
    [  
      {    
        name: 'David',    skills: ['HTM', 'CSS', 'JS', 'React'],
        scores: [98, 85, 90, 95]
      },
      {
        name: 'John',
        skills: ['HTM', 'CSS', 'JS', 'React'],
        scores: [85, 80, 85, 80]
      }
    ]
    ```

4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

    1. Add Bootstrap with level 8 to the front end skill sets
    2. Add Express with level 9 to the back end skill sets
    3. Add SQL with level 8 to the data base skill sets
    4. Add SQL without level to the data science skill sets

    ```jsx
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
    ```

    The copied object output should look like this:

    ```jsx
    {
      name: 'David',
      age: 25,
      skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
      }
    }
    ```

    ```jsx
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node', level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
      }
    };

    const newStudent = {
      ...student,
      skills: {
        ...student.skills,
        frontEnd: [
          ...student.skills.frontEnd,
          { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
          ...student.skills.backEnd,
          { skill: 'Express', level: 9 }
        ],
        dataBase: [
          ...student.skills.dataBase,
          { skill: 'SQL', level: 8 }
        ],
        dataScience: [
          ...student.skills.dataScience,
          'SQL'
        ]
      }
    };

    console.log(newStudent);
    ```

    ```jsx
    {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 },
          { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
          { skill: 'Node', level: 7 },
          { skill: 'GraphQL', level: 8 },
          { skill: 'Express', level: 9 }
        ],
        dataBase: [
          { skill: 'MongoDB', level: 7.5 },
          { skill: 'SQL', level: 8 }
        ],
        dataScience: ['Python', 'R', 'D3.js', 'SQL']
      }
    }
    ```

🎉 ✅Completed 🎉

[<< Day 10](/Day10/index.md) | [Day 12 >>](/Day12/index.md)
