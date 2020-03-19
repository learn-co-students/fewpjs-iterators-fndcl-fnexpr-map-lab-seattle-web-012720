const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(function(sentence) {
    let words = sentence.split(' ');
    let capitalWords = words.map(word => word[0].toUpperCase() + word.slice(1))
    return capitalWords.join(' ')
  })

  return newTutorials
  // return tutorials
}

console.log(titleCased())
// titleCased()
// let word = "hi"
// // console.log(word[0].toUpperCase())
// let firstLetter = word[0]
// firstLetter = firstLetter.toUpperCase()
// console.log(word)