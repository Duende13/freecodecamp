function largestOfFour(arr) {
  let longestNumsArray = [];
  for(let i=0; i<arr.length; i++){
    let biggestNum = arr[i][0] ;
    for(let j=0;j<arr[i].length;j++){
      if(biggestNum < arr[i][j]){
        biggestNum = arr[i][j];
      }
    }  
    longestNumsArray.push(biggestNum);  
    console.log(biggestNum);
  }
  return longestNumsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
