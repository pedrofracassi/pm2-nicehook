var http = require('http');
var createHandler = require('github-webhook-handler');

var handler = createHandler({
  "path": '/webhook',
  "secret": 'WOLOLO'
});

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(8888);

handler.on('error', function (err) {
  console.error('Error:', err.message);
});

handler.on('push', function (event) {
  if (event.payload.ref == 'refs/heads/master') {
    exec('pm2 pull ' + event.payload.repository.name, function(error, stdout, stderr) {
        if (error) return console.log(error);
    });
  }
});
