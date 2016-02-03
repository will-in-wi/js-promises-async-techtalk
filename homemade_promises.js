/*global document, console*/

(function(){
  "use strict";

  function MyPromise(callback) {
    var resolve = function(data) {

    };
    var reject = function(error) {

    };
    callback(function(data){

    })

    this.then = function(success_callback, failure_callback) {

    };
  }

  document.addEventListener("DOMContentLoaded", function(){
    var p = new MyPromise(function(resolve, reject){
      resolve('test');
    });

    p.then(function(data){
      console.log(data);
    }, function(error){
      console.error(error);
    });
  });
})();
