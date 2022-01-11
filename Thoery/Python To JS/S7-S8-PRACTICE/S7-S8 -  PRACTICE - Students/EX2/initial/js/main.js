let numbers = [1,1,2,3,4];
// TODO: 
// YOUR CODE HERE
let sumNumbers = 0;
let isNumberOne = true;
for (let i in numbers) {
    if (numbers[i] === 1 && isNumberOne) {
        isNumberOne = true;
    }else if (numbers[i] === 0 && !(isNumberOne)) {
        isNumberOne = false;
    }else {
        sumNumbers += numbers[i];
    }
}
console.log(sumNumbers);
// output: 14 becuase 3 + 5 + 1 + 2 + 3





