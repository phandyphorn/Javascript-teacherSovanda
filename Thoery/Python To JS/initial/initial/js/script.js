
// ------------------------------------------------------------------------------
//	EXERCICE 1 
// ------------------------------------------------------------------------------

/*
 You need to test an array of numbers
- The array should not empty. If empty, display on console:
				This array is empty
- To be valid, each numbers of the array shall be composed of exactly 2 digits and must be positive
- If valid, display on console:
				 Valid array
- If not valid, display on console:
				Invalid array
*/

// // Input to test
// // let ex1TestCase1 =[];
// // let ex1TestCase2 =[22, 33, 4, 2];
// // let ex1TestCase3 =[22, 33, 44, -22];
// // let ex1TestCase4 =[21, 33, 44, 66];

// // Write your code here
// let array = [];
// let result = "This array is empty";
// if (array.length !== 0){
// 	for(value of array) {
// 		if(value>=10 && value<=99) {
// 			result = "Valid array";
// 		}
// 		else {
// 			result = "Invalid array";
// 		}
// 	}
// }
// console.log(result);


// // One more way
// let array = [];
// if (array.length === 0) {
// 	console.log("This array is empty")
// }else {
// 	let valid = true;
// 	for (number of array) {
// 		if (number < 10 || number > 99) {
// 			valid = false
// 		}
// 	}
// 	console.log(valid);
// 	if (valid) {
// 		console.log("Valid array");
// 	}else {
// 		console.log("Invalid array")
// 	}
// }


// if (value >=10 && value <=99) the same to !(value <10 || value > 99)


// // ------------------------------------------------------------------------------
// //	EXERCICE 2 
// // ------------------------------------------------------------------------------

// /*
// We have a text composed of several words
// - Convert the first character of each word to uppercase
// - Add all the word to a new array
// o except the word that start by letter “w”
// - Console shall be display the new array that contains all those word
// */

// // Input to test
// let ex2-testCase1 = "hello! welcome to web programing at pnc"
// let ex2-testCase2 = "him is cute girl"
// let ex2-testCase3 = ""
 
// // Write your code here


// let str = 'hello welcome to PNC';
// let arrayOfWords = [];
// let eachWord = "";
// for (let index =0; index <str.length;index++) {
// 	if (str[index] != " "){
// 			eachWord += str[index];
// 	}else {
// 		if (eachWord[0] != 'w') {
// 				arrayOfWords.push(eachWord[0].toUpperCase()+eachWord.substring(1));	
// 			}
// 		eachWord = ""
// 		}
// 	}
// arrayOfWords.push(eachWord);
// console.log(arrayOfWords);
// // ------------------------------------------------------------------------------
// //	EXERCICE 3
// // ------------------------------------------------------------------------------

// // Input to test

// let ex3-testCase1 = [2.2, 23.4, 3, 33, 10, 50, 90]
// let ex3-testCase2 = [2, 1, 2, 3.45, 78.3]
// let ex3-testCase3 = [2, 1, 3, 4]


// // Write your code here
// let array = [2.2,23.4,3,33,10,50,90];
// for (value of array){
// 	if (Number(value) === value % 1 !== 0 ){
// 		array.shift(value);
// 	}
// }
// console.log(array);

// // ==> One more way
// let numbers = [2.3,4,5,6.2,3];
// let nArray = []
// for (let index = 0; index < numbers.length; index++) {
// 	if (numbers[index] % 1 == 0) {
// 		nArray.push(numbers[index])
// 	}	
// }
// console.log(nArray)


// // ------------------------------------------------------------------------------
// //	EXERCICE 4
// // ------------------------------------------------------------------------------

// // Input to test
// let students = ["Romdul", "RomChong", "Kolap"]
// let countries = ["Canada", "Cambodia", "Thai"]
// let majors = ["SNA", "WEB", "Database"]

// // Write your code here
// let students = ['Romdul','RomChong','Kolap'];
// let countries = ['Canada','Cambodia','Thai'];
// let majors = ['SNA','WEB','Database'];
// let bigArray = [];
// for (let index in students){
// 	let eachObject = {};
// 	// We can append like this
// 	eachObject.student=students[index];
// 	// We can append like this also
// 	eachObject['country']=countries[index];
// 	eachObject['major'] = majors[index];
// 	bigArray.push(eachObject);
// }
// console.log(bigArray);

// One more way
let students = ['Romdul','RomChong','Kolap'];
let countries = ['Canada','Cambodia','Thai'];
let majors = ['SNA','WEB','Database'];
array = [];
for (let i=0; i<students.length;i++) {
	let eachObject = {student: students[i],country: countries[i], major: majors[i]};;
	array.push(eachObject)
}
console.log(array)