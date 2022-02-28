// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: "A", "l", "p", "h", "a", "", "2", "0", "2", "2"
// b) Verify and explain: This is true because the split method with the quotes covert the string into an array with each index in quotations. This


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))
// //
// // // a) Your answer: Hello, LEARN Student
// // // b) Verify and explain: The answer is undefined because name isn't defined as a parameter.
// //
// //
// // // --------------------3) What will this log?
// //
// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// // a) Your answer: [8, 10, 12, 14, 16]
// // b) Verify and explain: The answer is as such because the function is defined as a multplied by 2 and map iterates through the array which produces those values.
//
//
// // --------------------4) What will this log?
// //
// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)
//
// // a) Your answer: [11, 13, 15]
// // b) Verify and explain: The answer is as such because the function is an onlyOdds function with the filter iterated through the array to show that it satisfied the given condtions.
//
//
// // --------------------5) What will this log?
//
// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
//  console.log(myCodingSkills.languages[0])
//
// // a) Your answer: JavaScript
// // b) Verify and explain: The answer is JavaScript because the function is asking for the value at the zero index from languages which is Javascript.
//
//
// // --------------------STRETCH: What will this log?
//
// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Alpha",
//     this.year = 2022
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
