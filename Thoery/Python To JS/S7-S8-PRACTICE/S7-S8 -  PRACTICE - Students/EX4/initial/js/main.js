// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let maxNum = arr[0];
for (value of arr) {
    if (value > maxNum) {
        maxNum = value;
    }
}
let result = [];
for (num of arr) {
    if (num < 5) {
        result.push(maxNum)
    }else {
        result.push(num)
    }
}
console.log(result);
// output: [9, 9, 6, 7, 9]

