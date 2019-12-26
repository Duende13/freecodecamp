function factorialize(num) {
  let newNum = 1;
  while(num>0){
    newNum *=num;
    num--;
  }
  return newNum;
}

factorialize(5);
