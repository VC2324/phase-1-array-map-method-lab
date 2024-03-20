const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const map1 = array1.map((x) => x * 2);

//use .map to get the list and duplicate to a new arry
// find 
// then write  titleCased .touppercase so that they new array has capital first letters
// then return capital case

// const titleCased = () => {
//   tutorials.map (tutorial) => {
//     // tutorial === 'what does the this keyword mean?'
 
//     // break/split the string into smaller chunks => 'what'
//     const words = tutorial.split(" ") //=> ['what', 'does', 'the', 'this', 'keyword', 'mean?']
//     words.map (word) => {
//       //word === 'what'

//       // take the first letter of the word and save it
//       const firstLetter = word[0] 
//       //firstLetter === 'w'

//       // upper case the first letter
//       const bigLetter = firstLetter.toUpperCase()
//       // bigLetter === "W"

//       // save the rest of the word somewhere
//       const wordsLeft = word.slice(1)
//       // wordsLeft === "hat"

//       // join the two thingys
//       finalWord = bigLetter + wordsLeft
      
//       // return the final word
//       return finalWord 
//     }
//   }
// }

function titleCased(){

  return tutorials.map( (tutorial) => {
    // tutorial === 'what does the this keyword mean?'
    const words = tutorial.split(" ");
    const fixWords = words.map( (word) => {
      const firstLetter = word[0];
      const bigLetter = firstLetter.toUpperCase();
      const wordsLeft = word.slice(1);
      const finalWord = bigLetter + wordsLeft;
      return finalWord;
    })

    // fixWords === ['what', 'does', 'the', 'this', 'keyword', 'mean?']
    const ultamiteFinalWord = fixWords.join(" ")
    return ultamiteFinalWord
  });
}


// 'what does the this keyword mean?' => 'What Does This Keyword Mean?'

// 'what does the this keyword mean?'.toUpperCase() => string [0]
// 'what does the this keyword mean?'[0].toUpperCase() => "W"

// // Target the first letter of each word
// // make it cap

// 'what'.splice => 'What'

// "what".splice = (0,1, "W")
// split

// 'what does the this keyword mean?'.split(' ') => ['what', 'does', 'the', 'this', 'keyword', 'mean?']
