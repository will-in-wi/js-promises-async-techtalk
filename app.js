/*global document, console*/

(function(){
  "use strict";

  function getJSON(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    var promise = new Promise(function(resolve, reject){
      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var data = JSON.parse(this.response);
          resolve(data);
        } else {
          // We reached our target server, but it returned an error
          reject('SERVER ERROR!!!');
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        reject('ERROR!!!!');
      };
    });

    request.send();

    return promise;
  }

  // https://www.promisejs.org/generators/
  function async(makeGenerator){
    return function () {
      var generator = makeGenerator.apply(this, arguments);

      function handle(result){
        // result => { done: [Boolean], value: [Object] }
        if (result.done) return Promise.resolve(result.value);

        return Promise.resolve(result.value).then(function (res){
          return handle(generator.next(res));
        }, function (err){
          return handle(generator.throw(err));
        });
      }

      try {
        return handle(generator.next());
      } catch (ex) {
        return Promise.reject(ex);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    var data = async(function* (){
      console.log('1');
      var result = yield getJSON('http://localhost:3000?a=1&b=2');
      console.log('2');
      var result1 = yield getJSON('http://localhost:3000?a=1&b=3');
      console.log('3');
      var result2 = yield getJSON('http://localhost:3000?a=1&b=4');
      console.log('4');
      return result;
    });

    data().then(function(result){
      console.log(result);
    });

  });
})();
