var fs=require('fs')
fs.stat('/', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
console.log(fs.readFileSync('/etc/passwd','utf8'))