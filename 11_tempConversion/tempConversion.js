const convertToCelsius = function(tempF) {
  let inC = (tempF - 32) * 5/9;
  let rounded = inC.toFixed(1);
  let result = parseFloat(rounded);
  return result;
  
};

const convertToFahrenheit = function(tempC) {
  inF = tempC * 9/5 + 32;
  let rounded = inF.toFixed(1);
  let result = parseFloat(rounded);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
