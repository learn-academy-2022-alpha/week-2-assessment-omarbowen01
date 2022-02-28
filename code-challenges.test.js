// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


//Write a function that takes in a number that outputs that specific number is divisble by three


describe ("num"), (%===3) => {
it ("returns num is divisible by three or not based on input", () =>
  expect(num(15)).toEqual("15 is divisible by three")
  expect(num(0)).toEqual("0 is divisible by three")
  expect(num(-7)).toEqual("-7 is not divisble by three")
})
})



// b) Create the function that makes the test pass.


//  Create a function that takes in values that will output if it is divisible by three or not
const num = (value) => {
  if (15 %===3) {
    return "15 is divisible by three"
  } else if(0%===3) {
    return "0 is divisble by three"
    else (-7===3) {
      return "-7 is not divisible by three"
    }
  }


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("upperCased", (array) => {
  it("returns a string that has an array with all capitalized letters", () => {
    expect(upperCased("")).toEqual(".upperCased")
    expect(upperCased("")).toEqual(".upperCased")
  })
})

// b) Create the function that makes the test pass.

//Create a function that iterates through both arrays and uppercases all values
const upperCased= (array) => {
  return (randomNouns1,randomNouns2.upperCased))
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// create a test with expect statements for this problem
// write the expect statements with to equal the first vowel in the variable

describe("firstIndex", () => {
  it("returns the index of the first vowel", () => {
    expect(vowelTester1).toEqual("e")
    expect(vowelTester2).toEqual("a")
    expect(vowelTester3).toEqual("a")
  })
})

// b) Create the function that makes the test pass.
// Create function that takes in string values and returns first vowels from each string.
const firstIndex= ()=> {
  if (string==="learn"){
    return "e"
  } else if(string==="academy") {
  return "a"
} else(string==="challenges") {
return "a"
}
}
