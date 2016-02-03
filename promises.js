var p = new Promise(function(resolve, reject){
  // Blah blah blah
  resolve('stuff');
});

p.then(function(data){
  // Resolved
}, function(error){
  // Rejected
});
