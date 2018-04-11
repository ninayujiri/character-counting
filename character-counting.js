function countLetters(str) {

  let noSpaces = str.split(" ").join("").split("");
  let result = {};

  for (var i = 0; i < noSpaces.length; i++) {

    if (!result[noSpaces[i]]) {
      result[noSpaces[i]] = 1;
    } else {
      result[noSpaces[i]]++;
    }

  }

  return result;

}

console.log(countLetters("lighthouse in the house"));