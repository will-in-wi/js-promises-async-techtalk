function simpleIterator() {
  var i = 0;

  return {
    next: function(){
      if (i > 10) {
        return {
          value: i,
          done: true
        }
      }
      return {
        value: i++,
        done: false
      };
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('Hello world!');
  window.iter1 = simpleIterator();
});
