// case 1:
// let arr = [1, 6, 3, 7, 9];
// // TODO: 
// // YOUR CODE HERE

// I am finding a max num.
let maxNum = arr[0];
for (value of arr) {
    if (value > maxNum) {
        maxNum = value;
    }
}

// Find number which less than 
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

