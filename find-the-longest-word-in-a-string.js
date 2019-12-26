function findLongestWordLength(str) {
  let strArray = str.split(" ");
  let longestWord = 0;
  for( let i = 0; i < strArray.length; i++){
    if(longestWord < strArray[i].length){
      longestWord = strArray[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
