const repeatString = function(text, num) {

  // Check if it is a negative number, we cant repeat something a negative number of times
  if (num < 0) {
      return "ERROR";
  }
  let repeatedText = "";
  for (let i = 0; i < num; i++) {
      repeatedText += text;
  }
  return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
