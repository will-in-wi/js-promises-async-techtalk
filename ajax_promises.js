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


  document.addEventListener("DOMContentLoaded", function(){
    var p = getJSON('http://localhost:3000?a=1&b=2');

    p.then(function(data){
      // Success
      console.log(data);
    }, function(error_message){
      // Failure
      console.error(error_message);
    });
  });
})();
