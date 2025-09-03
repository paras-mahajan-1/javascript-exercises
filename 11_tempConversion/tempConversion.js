  function round(value, precision) {
      let multiplier = Math.pow(10, precision || 0);
      return Math.round((value*multiplier))/multiplier
  }
  console.log(round(3.7856, 2))

const convertToCelsius = function() {
  let value = arguments[0];
  return round((value-32)*5/9, 1);
};

const convertToFahrenheit = function() {
  let value = arguments[0];
  return round((value*9/5) + 32, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
