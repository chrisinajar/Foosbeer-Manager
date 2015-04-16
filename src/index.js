var pmx = require('pmx');
var config = require('../config');

pmx.action('upgrade_webapp', function(reply) {
	var ls = require('child_process').spawn('git', ['pull'], {
		cwd: config.client.cwd
	});
	ls.on('close', function (code) {
		reply(code);
	});
});

pmx.action('npm install server', function(reply) {

});
