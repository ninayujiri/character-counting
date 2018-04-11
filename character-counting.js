
function strToArray(str) {

  let inputArray = [];

  for (var i = 0; i < str.length; i++) {
    inputArray.push(str[i]);
  }

  return inputArray;
}


function makeKeys(inputArray) {

  let characters = {};

  for (var i = 0; i < inputArray.length; i++) {
    characters["inputArray"] = "n";
  }
  return characters;
}






console.log(makeKeys(strToArray));
console.log(strToArray("lighthouse in the house"));