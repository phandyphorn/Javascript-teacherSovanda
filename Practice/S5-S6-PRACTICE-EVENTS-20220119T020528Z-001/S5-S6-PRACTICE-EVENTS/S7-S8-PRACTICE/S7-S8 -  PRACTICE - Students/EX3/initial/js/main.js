let array = [[1,3,6,7,9],
            [4,3,5,9,1]];
let arrayOfMaxNums = [];
for (let index= 0; index<array[0].length; index++) {
    if (array[0][index] > array[1][index]) {
        arrayOfMaxNums.push(array[0][index]);
    }else {
        arrayOfMaxNums.push(array[1][index])
    }
}
console.log(arrayOfMaxNums);