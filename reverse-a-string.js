function reverseString(str) {
  let strArray = str.split('');
  let newStr = '';
  for(let i = strArray.length -1; i >= 0; i--){
    newStr += strArray[i];
  }
  console.log(newStr);

  return newStr;
}

reverseString("hello");
