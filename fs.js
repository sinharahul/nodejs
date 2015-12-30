var fs=require('fs')
fs.stat('/', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});