// ========================================Part One =====================
// Single line comment in JavaXript
// /* */ multiple line in javaScript
// Number One
// for (let n = 0; n < 3; n++) {
//     console.log("hello");
// }


// Number Two
// for (let n = 2; n < 5; n++) {
//     console.log(n);
// }


// Number Three
// let numbers = [5,6,7];
// for (let value of numbers) {
//     console.log(value);
// }


// Number Five
// let x = 10;
// x ++;
// console.log(x);


// Number Six
// console.log(10%3);


// Number Seven
// let n1 = 4;
// let n2 = n1 ** 2;
// console.log(n2)


// Number Eight
// console.log ("ronan" + "hello");


// Number Nine 
// const text = "ronan";
// const newText = text.slice(0,-2);
// console.log(newText);
// One more
// let text = "Hello";
// console.log(text.substring(0,text.length-1));


// Number Ten
// const text = "ronan";
// const newText = text.slice(1);
// console.log(newText);

// One more Way
// const text = "ronan";
// console.log(text.substring(1));


// Number Eleven
// document.write("hi<br>ho");
// One more way
// console.log("hi\nho");


// Number Twelve
// let text = "ronan";
// console.log(text.length);


// Number Thirtheen
// let text = "abcd";
// Number of character mean that lenght of those text
// To get index of character ke use charAt()
// console.log(text.lenght)


// Number Fourtheen
// let str1 = "4";
// let str2 = "5";
// console.log(parseInt(str1)+parseInt(str2));


// Number Fifteen
// text = "Hello";
// console.log(isNaN(text));


// Number Sixteen
// let text = "hello";
// console.log(text.toUpperCase());


// Number Seventeen
// console.log(text.toLowerCase());
// Number Eighteen
// console.log("ronan the best")


// Number Nineteen
// let number = prompt("Enter Number");
// while (number != 5) {
//     console.log("try again")
//     number = prompt("Enter Number")
// }


// Number Twenty
// let x = 5;
// if (x < 5 && x > 6) {
//     console.log("monday");
// }else if (x > 10) {
//     console.log("friday");
// }else {
//     console.log("sunday")
// }


// Number Twenty One 
// console.log("ronan the best");
// document.write("ronan the best")
// alert("ronan the best");

// ============================================Part Two=========
// Number one (is equal, is creater)
// let x = 5;
// let y = 5;
// console.log(x===y);


// // Number Two (and/or/not)
// let x = 5;
// let y = 5;
// result = (!((x===y) && (x>5||y<10)));
// console.log(result);


// // Number Three (convert a string to integer)
// let n = '5';
// let nToInteger = parseInt(n);
// console.log(nToInteger + nToInteger);


// // Number Four (conver a integer to string)
// let n = 5;
// console.log(n.toString() + n.toString());


// // Number Five (define a function)
// function sum (n1,n2) {
//     let total = n1 + n2;
//     return total;
// }
// console.log(sum(100,200));

// // Make as fuction
// function sumNums(array) {
//     let sum = 0;
//     for (let index in array) {
//         sum += array[index];
//     }
//     return sum;
// }
// let arrayOfNums = [1,2,3,4]
// console.log(sumNums(arrayOfNums));

// // Number Five (create empty array)
// let array = [];


// // Number Six (create nums array)
// let array = [12,13,15,16];


// // Numbe Seven (access using index)
// let array = [12,13,15,16];
// console.log(array[0]);

// // Number Eight(insert value at index)
// let array = [12,13,14,16];
// let index = 1;
// let result = array.splice(index,0,20);
// console.log(array);


// Number Nine (insert by push)
// Insert value at the end
// let array = [12,13,15,16];
// let resutl = array.push(20);
// console.log(array);

// // Number Ten (remove using index) 
// let array = [12,13,14,16];
// let result = array.shift(2)
// console.log(array);

// // Number Eleven (Get a sub array)
// let array = [12,13,14,16];
// let result = array.slice(1,3);
// console.log(result);

// // Number Twelve (Create array2D with values)
// let array2D = [
//     [12,13,15,16],
//     [4,5,6,7]
// ];

// // Thirteen
// let array2D = [
//     [12,13,15,16],
//     [4,5,6,7]
// ];
// for (let index in array2D) {
//     result = array2D[1][0];
// }
// console.log(result);

// // Fourteen (create empty dictionary (object))
// let object = {};


// // Fifteen (Create array with values)
// let object = {
//     key1: 'value1',
//     key2: 'value2'
// };


// // Sixteen (Access using key)
// let object = {
//     key1: 'value1',
//     key2: 'value2'
// };
// console.log(object["key1"]);


// // Seventeen (add value for a new key)
// let object = {
//     key1: 'value1',
//     key2: 'value2'
// };
// let result = object.key3="value3";
// console.log(object);

// // Eighteen
// let object = {
//     key1: 'value1',
//     key2: 'value2'
// };
// let result = object.key2="value2New";
// console.log(object);


// Nineteen
// let object = {
//     key1: 'value1',
//     key2: 'value2'
// };
// delete object.key2;
// console.log(object);




// let student = {
//     name: 'Sok',
//     age : 19,
//     class:'WEP-A'
// };
// console.log(student);
// console.log(student['age']);


// let person = {
//     name: 'rady',
//     age: 26
// };
// person['providce'] = "BMC";
// // or
// person.position = "trainer";
// console.log(person);


// // An object can be composed of other objects
// let students = {
//    generation: {
//        year: 2021,
//        major: {
//            mobile: {
//                teacher: 'rady',
//                coach: 'ronan'
//            },
//            web: {
//                teacher:'him',
//                coach: 'clement'
//            }
//        },
//        school: 'PNC'
//    }
// }
// console.log(students.generation.major.mobile);

// delete teacher.name mean that key name have been delete


// let teachers = {
//     name: 'ronan',
//     age: 20
// }
// // reassign or update
// teachers.name = 'rady';
// teachers.age = 26;
// console.log(teachers)


// ===================Normal function ==========
/*// Declaration
function sum(pa1,pa2) {
    return pa1 + pa2;
}
// call
let result = sum(10,30);
console.log(result);
*/


// // =======================Arrow function=========
// // Declaration
// let sum = (para1,para2) => {
//     return para1 + para2;
// }
// // Call
// let result = sum(10,30);
// console.log(result);


