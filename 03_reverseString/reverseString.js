const reverseString = function(string) {
  let reversed = "";
  let strArray = string.split("");
  let strArrayLen = strArray.length
  for (let i = 0; i < strArrayLen; i++) {
      reversed += strArray.pop();
  }

  return reversed;
};

console.log(reverseString("hello world"))

// Do not edit below this line
module.exports = reverseString;
