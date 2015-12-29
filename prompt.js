/**
 * http://usejsdoc.org/
 */
 var prompt = require('prompt');
var theNumber;
  prompt.start();

  prompt.get(['number'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('number ' + result.number);
    theNumber=result.number
    var no = Number(theNumber);
    console.log("The number received is ",no)
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

