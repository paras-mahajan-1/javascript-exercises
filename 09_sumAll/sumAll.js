const sumAll = function() {
    let first = arguments[0];
    let second = arguments[1];
    if (first > second) {
        let counter = second;
        second = first;
        first = counter;
    };
    if ((Math.floor(first) != first) || (Math.floor(first) != first)) {
        return "ERROR"
    }
    if ((first < 0) || (second < 0) || ((typeof(first) != "number") || typeof(second) != "number")) {
        return "ERROR"
    }

    let counterSum = 0;
    for (let i = first; i <= second; i++) {
        counterSum += i;
    }
    return counterSum
};

// Do not edit below this line
module.exports = sumAll;
