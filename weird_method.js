/*global document, console*/

(function(){
  "use strict";

  function weirdMethod(callback){
    callback(function(data){
      console.log('YAY!');
      console.log(data);
    }, function(error){
      console.log('ERROR!');
      console.log(error);
    });
  };

  document.addEventListener("DOMContentLoaded", function(){
    weirdMethod(function(yay, error){
      error('blah');
    });
  });
})();
