// let challenge = '30 Days Of JavaScript';

// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substr(0, 3));
// console.log(challenge.substr(4));
// console.log(challenge.includes('Script'));
// console.log(challenge.split(''));
// console.log(challenge.split(' '));
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));
// console.log(challenge.replace('JavaScript', 'Python'));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt('J'));
// console.log(challenge.indexOf('a'));
// console.log(challenge.lastIndexOf('a'));
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
// console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
// console.log(' 30 Days Of JavaScript '.trim());
// console.log(challenge.startsWith('30 Days Of'));
// console.log(challenge.endsWith('JavaScript'));
// console.log(challenge.match(/a/g));
// console.log('30 Days of'.concat('JavaScript'));
// console.log(challenge.repeat(2));


// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" by Mother Teresa");

// if (typeof '10' !== 10) {
//     const num = parseInt('10');
// }

// if (parseFloat('9.8') !== 10) {
//     const num = 10;
// }

// const python = 'python';
// const jargon = 'jargon';
// console.log(python.includes('on') && jargon.includes('on'));

// const sentence = "I hope this course is not full of jargon";
// console.log(sentence.includes('jargon'));

// console.log(Math.floor(Math.random() * 101));

// console.log(Math.floor(Math.random() * 51) + 50);

// console.log(Math.floor(Math.random() * 256));

// const str = 'JavaScript';
// const index = Math.floor(Math.random() * str.length);
// console.log(str[index]);

// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// const sentence = "You cannot end a sentence with because because because is a conjunction";
// const phrase = sentence.substr(sentence.indexOf("because"), 17);
// console.log(phrase);



// const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// let count = 0;
// let word = "love";
// let words = sentence.split(" ");
// for (let i = 0; i < words.length; i++) {
//   if (words[i].toLowerCase() === word) {
//     count++;
//   }
// }
// console.log("The word 'love' appears " + count + " times in the sentence.");

// const sentence = "You cannot end a sentence with because because because is a conjunction";
// let count = (sentence.match(/because/g) || []).length;
// console.log("The word 'because' appears " + count + " times in the sentence.");

// const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// let cleanedSentence = sentence.replace(/[^\w\s]/gi, "").toLowerCase();
// let words = cleanedSentence.split(" ");
// let wordFrequency = {};
// for (let i = 0; i < words.length; i++) {
//   if (wordFrequency[words[i]]) {
//     wordFrequency[words[i]]++;
//   } else {
//     wordFrequency[words[i]] = 1;
//   }
// }
// let maxFrequencyWord;
// let maxFrequency = 0;
// for (let word in wordFrequency) {
//   if (wordFrequency[word] > maxFrequency) {
//     maxFrequency = wordFrequency[word];
//     maxFrequencyWord = word;
//   }
// }
// console.log("The most frequent word in the sentence is: " + maxFrequencyWord);

// const text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// const numbers = text.match(/\d+/g).map(Number);
// const totalIncome = (numbers[0] * 12) + numbers[1] + (numbers[2] * 12);
// console.log("The total annual income is: " + totalIncome + " euro");
