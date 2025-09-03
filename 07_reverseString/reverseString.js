const reverseString = function() {
    let string = arguments[0];
    let stringArray = string.split(" ");
    let reversedArray = [];
    for (let i = stringArray.length-1; i >= 0; i--) {
        let counterArray = stringArray[i].split("");
        let newArray = []
        for (let i = counterArray.length-1; i >= 0; i--) {
            newArray.push(counterArray[i]);
        } let newVar = newArray.join("");
        reversedArray.push(newVar)
    }
    let result = reversedArray.join(" ")
    return result
};

// Do not edit below this line
module.exports = reverseString;
