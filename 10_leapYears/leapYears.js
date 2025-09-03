const leapYears = function() {
    let arg = arguments[0];
    if ((arg%400 == 0)){
        return true
    } 
    if ((arg%100 == 0)) return false;
    if (arg%4==0) {return true}  
    else {return false}
};

// Do not edit below this line
module.exports = leapYears;
