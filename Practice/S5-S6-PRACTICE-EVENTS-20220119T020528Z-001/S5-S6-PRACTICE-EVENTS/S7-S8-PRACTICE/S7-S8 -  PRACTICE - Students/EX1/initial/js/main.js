let text = "hello world [JavaScript] we [are] strong! [phandy]";
// TODO: 
// YOUR CODE HERE
newText = "";
isAddChar = true;
for (char of text) {
    if (char !== "[" && isAddChar){
        newText += char
    }else if (char === "[") {
        isAddChar = false
    }else if (char === "]") {
        isAddChar = true
    }
}
console.log(newText);
// output: hello world we strong!




