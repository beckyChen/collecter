var fs = require('fs');

exports.plugin = function(req, res){
    fs.readFile('./public/javascripts/collector.js', function (err, logData) {
       res.set('Content-Type', 'application/x-javascript');
       res.send(logData.toString());
    });
};
