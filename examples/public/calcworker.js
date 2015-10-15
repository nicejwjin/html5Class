self.onmessage = function(evt) {
  var num = evt.data;
  var result = 0;
  //test( );
  for(var i = 1; i <= num; i++) {
    result += i;
  }
  self.postMessage(result);
};