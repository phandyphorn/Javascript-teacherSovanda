let numbers = [4,1,1,2,3,4]
// TODO: 
// YOUR CODE HERE
let sumNumbers = 0;
let isNumberOne = false;
for (i in numbers) {
    // we put let and don't also.
    if (numbers[i] === 1 && !(isNumberOne)) {
        isNumberOne = true;
    }else if (numbers[i] === 0 && (isNumberOne)) {
        isNumberOne = false;
    }else{
        sumNumbers += numbers[i];
    }
    // This exercise mean that it those numbers are not 1 and 0, so they will sum to sumNumbers (else)
}
console.log(sumNumbers);
// output: 14 becuase 3 + 5 + 1 + 2 + 3





