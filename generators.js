function* myGenerator() {
  var index = 0;
  while(true) {
    yield index++;
  }
}

window.myGen = myGenerator();
