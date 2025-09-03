const repeatString = function() {
    let string = arguments[0];
    let emptyString = ""
    let num = arguments[1];
    if (num < 0) { return "ERROR"}
    for (let i = 0; i < num; i++) {
        emptyString += string
    }
    return emptyString
};


// Do not edit below this line
module.exports = repeatString;
