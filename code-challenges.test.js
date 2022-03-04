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

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]
//
//
// // b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// Create a function called divisiblebyThree
// parameter is number
// utilize modulo operator to determine if number is divisible by three
// return string interpolation with the number and a description

describe("divisibleByThree", () => {
	it ("returns a number as an argument and decides if the number is evenly divisible by three or not", () =>
	expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
	expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
	expect(divisibleByThree(num3)).toEqual("7 is divisible by three")

})
})





// b) Create the function that makes the test pass.

//make an if/else statement that reflects if the test passes the function or not and outputs if said number is divisble  by three

if (number % 3 === 0) {
	return `${number} is divisible by three`
	} else {
Return `${number} is divisible by three`
}
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


//create a function called arrayCapitalizer
//make the parameter an array
//iterate each item in the array
//iteration will go from array to array without change in length -> map!
// value of map will be a string- capitalize
// isolate the first letter of string and uppercase-  can use splice, charAT, etc.
// isolate the rest of the word- substring, splice
//return an array of string with capital letters

describe("arrayCapitalizer", () => {
 	it("takes an array of words and returns an array the words capitalized", () => 	expect(arrayCapitalizer(randomNouns1)).toEqual(["list out string values"])
	expect(arrayCapitalizer(randomNouns2)).toEqual(["list out string values"])
})
})




// b) Create the function that makes the test pass.

//Create a function that iterates through both arrays and uppercases all values

Const arrayCapitalizer= (array) => {
	array.map(value => {
	return `${value[0].toUpperCase()}${value.slice(1)}`
})
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//Create a function called firstVowel
//parameter-string
//decision about each  item in the string- iteration
//for loop
//conditional statement with an

describe("firstVowel", () =>
	it ("takes in a string and log this the index of the first vowel", () => {
		const vowelTester1= "learn"
		const vowelTester2= "academy"
		const vowelTester3= "challenge"

	expect(firstVowel(vowelTester1)).toEqual(1)
	expect(firstVowel(vowelTester2)).toEqual(0)
	expect(firstVowel(vowelTester3)).toEqual(2)

// b) Create the function that makes the test pass.

// Create function that takes in string values and returns first vowels from each string.
const firstVowel= (string) => {
	let vowelArray= string.split("").filter(vowel => vowel === "a" || vowel === "e" || vowel "i" || vowel === "o" || vowel === "u")
	return string.indexOf(vowelArray[0])
}
