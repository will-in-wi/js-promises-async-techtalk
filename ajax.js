var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log('YAY!');
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
    console.log('SERVER ERROR!!!');
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log('ERROR!!!!');
};

request.send();
